import {db} from '../firebase-config'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import AuthService from './AuthService'
import ToastStore from '../../Stores/ToastStore'

class ReadService {
    getCrops = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(
                collection(db, "Crops"),
                where("User", "==", user)
            ) 
        return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading crops."
            })
            console.error(e)
        }
    }

    getAnimals = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(
                collection(db, "Animals"),
                where("User", "==", user),
                orderBy("Name", "asc")
            ) 
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

    getVehicles = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(
                collection(db, "Vehicles"),
                where("User", "==", user),
                orderBy("Name", "asc")
            ) 
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

    getOrchard = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(
                collection(db, "Orchard"),
                where("User", "==", user),
                orderBy("Name", "asc")
            ) 
        return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading orchard."
            })
            console.error(e)
        }
    }

    getFields = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(
                collection(db, "Fields"),
                where("User", "==", user),
                orderBy("Name", "asc")
            ) 
        return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading fields."
            })
            console.error(e)
        }
    }

    getGarden = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(
                collection(db, "Garden"),
                where("User", "==", user),
                orderBy("Name", "asc")
            ) 
        return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading garden."
            })
            console.error(e)
        }
    }
}

export default new ReadService()