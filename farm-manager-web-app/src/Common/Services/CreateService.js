import {db} from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import AuthService from './AuthService'
import ToastStore from '../../Stores/ToastStore'

class CreateService {
    newCrop = async (payload) => {
        try {
            const collectionRef = collection(db, "Crops")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                State: payload.state,
                Harvested: payload.harvested,
                Profit: Number(payload.profit),
                User: AuthService.currentUser.uid,
                Unit: payload.unit
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "New crop is successfully created."
            }) 
        } catch (err) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error adding new crop."
            })
            console.error(err)
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
                Description: payload.descr,
                Product: payload.product,
                Profit: Number(payload.profit),
                User: AuthService.currentUser.uid
            })
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

    newVehicle = async (payload) => {
        try {
            const collectionRef = collection(db, "Vehicles")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                User: AuthService.currentUser.uid
            })
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

    newField = async (payload) => {
        try {
            const collectionRef = collection(db, "Fields")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                Size: Number(payload.size),
                Crop: payload.crop,
                Treatment: payload.treatment,
                User: AuthService.currentUser.uid
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "New field is successfully created."
            }) 
        } catch (err) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error adding new field."
            })
            console.error(err)
        }
    }
}

export default new CreateService()