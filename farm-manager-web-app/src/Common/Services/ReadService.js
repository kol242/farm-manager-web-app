import {db} from '../firebase-config'
import { collection, query, getDocs } from 'firebase/firestore'
import ToastStore from '../../Stores/ToastStore'

class ReadService {
    getCrops = async () => {
        try {
            const ref = query(collection(db, "Crops")) 
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

    getVehicles = async () => {
        try {
            const ref = query(collection(db, "Vehicles")) 
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

    getFields = async () => {
        try {
            const ref = query(collection(db, "Fields")) 
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
}

export default new ReadService()