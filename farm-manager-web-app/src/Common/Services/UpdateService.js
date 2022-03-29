import {db} from '../firebase-config'
import { updateDoc, doc } from 'firebase/firestore'
import ToastStore from '../../Stores/ToastStore'

class UpdateService {
    updateCrop = async (payload, id) => {
        try {
            const collectionRef = doc(db, "Crops", id)
            await updateDoc(collectionRef, { 
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                State: payload.state,
                Harvested: payload.harvested,
                Profit: Number(payload.profit)
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Crop is successfully updated."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating crop."
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

    updateField = async (payload, id) => {
        try {
            const collectionRef = doc(db, "Crops", id)
            await updateDoc(collectionRef, { 
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                Size: Number(payload.size),
                Crop: payload.crop,
                Treatment: payload.treatment,
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Field is successfully updated."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating field."
            })
        }
    }
}

export default new UpdateService()