import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from 'firebase/auth'
import { makeAutoObservable, runInAction } from 'mobx'
import { db } from '../firebase-config'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import ToastStore from '../../Stores/ToastStore'
import axios from 'axios'
import CropsStore from '../../Stores/CropsStore'
import AnimalStore from '../../Stores/AnimalStore'
import VehicleStore from '../../Stores/VehicleStore'
import FieldStore from '../../Stores/FieldStore'

class AuthService {
    userData = {}
    currentUser
    loggedIn = false
    signupChecker = false
    currencies = []
    countries = []

    constructor() {
        makeAutoObservable(this)
        this.getCurrencies()
        this.getCountries()
    }

    signup = async (userData) => {
        try {
            const collectionRef = collection(db, "Users")
            await addDoc(collectionRef, {
                username: userData.username,
                farmName: userData.farm,
                country: userData.country,
                email: userData.email,
                currency: userData.currency
            })
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
            runInAction(() => {
                ToastStore.notificationType({
                    type: "SUCCESS",
                    title: "Success!",
                    message: "You successfully signed up. Log In to continue."
                })    
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Signup failed!",
                message: "Something went wrong..."
            })
        }
    }

    getCountries = async () => {
        try {
            await axios.get(`https://restcountries.com/v2/all`)
            .then(res => {
                const data = res.data
                this.countries = data.map(country => {
                    return {
                        name: country.name
                    }
                })
            }) 
        } catch(err) {
            console.error(err)  
        }
    }

    getCurrencies = async () => {
        try {
            await axios.get(`https://openexchangerates.org/api/currencies.json`)
            .then(res => {
                const data = res.data
                for (const [key] of Object.entries(data)) {
                    this.currencies.push(key)
                }
            }) 
        } catch(err) {
            console.error(err)  
        }
    }

    login = async (userData) => {
        try {
            await signInWithEmailAndPassword(auth, userData.email, userData.password)
            await this.setCurrentUser()
            runInAction(() => {
                this.getUserData(userData.email)
                this.loggedIn = true
                CropsStore.getCrops()
                AnimalStore.getAnimals()
                FieldStore.getFields()
                VehicleStore.getVehicles()
            })
        } catch(err) {
            this.loggedIn = false
            ToastStore.notificationType({
                type: "ERROR",
                title: "Login failed!",
                message: "Wrong email or password."
            })
            console.error(err)
        }
        
    }

    getUserData = async (email) => {
        const ref = query(collection(db, "Users"), where("email", "==", email))
        const data = await getDocs(ref)
        runInAction(() => {
            data.forEach(doc => {
                return this.userData = {
                    username: doc.data().username,
                    country: doc.data().country,
                    farmName: doc.data().farmName,
                    currency: doc.data().currency,
                    id: doc.id,
                }
            })    
        })
    }

    setCurrentUser = () => {
        return auth.onAuthStateChanged(user => {
        this.currentUser = user
        })
    }

    logoutCleaner = () => {
        CropsStore.crops = []
        CropsStore.chartCost = []
        CropsStore.chartProfit = []
        AnimalStore.Animals = []
        VehicleStore.Vehicles = []
        FieldStore.Fields = []
    }

    logout = async () => {
        await signOut(auth)
        runInAction(() => {
            this.logoutCleaner()
            this.loggedIn = false
            this.signupChecker = false
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "You are successfully logged out!"
            })
            return this.setCurrentUser()    
        })
    }

    userUpdate = async (userData) => {
        try {
            await updateEmail(this.currentUser, this.currentUser.email)
            await updatePassword(this.currentUser, userData.password)
            const collectionRef = doc(db, "Users", this.userData.id)
            await updateDoc(collectionRef, { 
                farmName: userData.farmName,
                country: userData.country,
                username: userData.username,
                email: userData.email
            })
            runInAction(() => {
                this.getUserData(this.currentUser.email)
                ToastStore.notificationType({
                    type: "SUCCESS",
                    title: "Success!",
                    message: "Your profile is successfully updated!"
                })    
            })
        } catch(err) {
            console.error(err)
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating profile."
            })
        }
    }
}

export default new AuthService()