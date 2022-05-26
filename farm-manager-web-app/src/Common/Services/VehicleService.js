import { addDoc, collection, deleteDoc, doc, getDocs, limit, orderBy, query, startAfter, updateDoc, where } from 'firebase/firestore'
import { makeAutoObservable } from 'mobx'
import ToastStore from '../../Stores/ToastStore'
import VehicleStore from '../../Stores/VehicleStore'
import { db } from '../firebase-config'
import AuthService from './AuthService'
import FilterService from './FilterService'

class VehicleService {
    constructor() {
        makeAutoObservable(this)
    }

    getVehicles = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(collection(db, "Vehicles"), 
            where("User", "==", user), 
            limit(5), 
            orderBy("Name")) 
            return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading vehicles."
            })
            console.error(e)
        }
    }

    nextItems = async (lastData) => {
        const user = await AuthService.currentUser.uid
        const ref = query(collection(db, "Vehicles"), 
        where("User", "==", user),
        orderBy("Name"), 
        startAfter(lastData), limit(5))
        return getDocs(ref)   
    }

    newVehicle = async (payload) => {
        try {
            const collectionRef = collection(db, "Vehicles")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.description,
                User: AuthService.currentUser.uid
            })
            VehicleStore.addingChecker()
            VehicleStore.getVehicles()
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "New vehicle is successfully created."
            }) 
        } catch (err) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error adding new vehicle."
            })
            console.error(err)
        }
    }

    deleteVehicle = async (id) => {
        try {
            const collectionRef = doc(db, "Vehicles", id)
            await deleteDoc(collectionRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Vehicle is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting vehicle."
            })
        }
    }

    updateVehicle = async (payload, id) => {
        try {
            const collectionRef = doc(db, "Vehicles", id)
            await updateDoc(collectionRef, { 
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Vehicle is successfully updated."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating vehicle."
            })
        }
    }

    vehiclesFilter = async () => {
        const ref = query(collection(db, "Vehicles"), 
        where(FilterService.filterObj.field, FilterService.filterObj.operator, FilterService.filterObj.data))
        return getDocs(ref)
    }

    vehicleSorter = async () => {
        const ref = query(collection(db, "Vehicles"), 
        orderBy(FilterService.sortObj.field, FilterService.sortObj.operator))
        return getDocs(ref)
    }
}

export default new VehicleService()