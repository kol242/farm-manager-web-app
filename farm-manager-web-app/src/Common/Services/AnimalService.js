import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'
import { makeAutoObservable } from 'mobx'
import AnimalStore from '../../Stores/AnimalStore'
import ToastStore from '../../Stores/ToastStore'
import { db } from '../firebase-config'
import AuthService from './AuthService'
import FilterService from './FilterService'

class AnimalService {
    constructor() {
        makeAutoObservable(this)
    }

    getAnimals = async () => {
        try {
            const ref = query(collection(db, "Animals")) 
            return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading animals."
            })
            console.error(e)
        }
    }

    newAnimal = async (payload) => {
        try {
            const collectionRef = collection(db, "Animals")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.description,
                Product: payload.product,
                Profit: Number(payload.profit),
                User: AuthService.currentUser.uid
            })
            AnimalStore.getAnimals()
            AnimalStore.addingChecker()
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "New animal is successfully created."
            }) 
        } catch (err) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error adding new animal."
            })
            console.error(err)
        }
    }

    deleteAnimal = async (id) => {
        try {
            const collectionRef = doc(db, "Animals", id)
            await deleteDoc(collectionRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Animal is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting animal."
            })
        }
    }

    updateAnimal = async (payload, id) => {
        try {
            const collectionRef = doc(db, "Animals", id)
            await updateDoc(collectionRef, { 
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                Product: payload.product,
                Profit: Number(payload.profit)
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Animal is successfully updated."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating animal."
            })
        }
    }

    animalsFilter = async () => {
        const ref = query(collection(db, "Animals"), 
        where(FilterService.filterObj.field, FilterService.filterObj.operator, FilterService.filterObj.data))
        return getDocs(ref)
    }
    
    animalSorter = async () => {
        const ref = query(collection(db, "Animals"), 
        orderBy(FilterService.sortObj.field, FilterService.sortObj.operator))
        return getDocs(ref)
    }

}

export default new AnimalService()