import {db} from '../firebase-config'
import { deleteDoc, doc } from 'firebase/firestore'
import ToastStore from '../../Stores/ToastStore'

class DeleteService {
    deleteCrop = async (id) => {
        try {
            const collectionRef = doc(db, "Crops", id)
            await deleteDoc(collectionRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Crop is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting crop."
            })
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
    
    deleteField = async (id) => {
        try {
            const collectionRef = doc(db, "Fields", id)
            await deleteDoc(collectionRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Field is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting field."
            })
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
}

export default new DeleteService()
