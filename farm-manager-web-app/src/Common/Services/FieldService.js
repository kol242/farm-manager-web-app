import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'
import { makeAutoObservable } from 'mobx'
import FieldStore from '../../Stores/FieldStore'
import ToastStore from '../../Stores/ToastStore'
import { db } from '../firebase-config'
import AuthService from './AuthService'
import FilterService from './FilterService'

class FieldService {
    constructor() {
        makeAutoObservable(this)
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

    newField = async (payload) => {
        try {
            const collectionRef = collection(db, "Fields")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.description,
                Size: Number(payload.size),
                Crop: payload.crop,
                Treatment: payload.treatment,
                User: AuthService.currentUser.uid,
                Unit: payload.sizeUnit
            })
            FieldStore.addingChecker()
            FieldStore.getFields()
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

    updateField = async (payload, id) => {
        try {
            const collectionRef = doc(db, "Fields", id)
            await updateDoc(collectionRef, { 
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.descr,
                Size: Number(payload.size),
                Crop: payload.crop,
                Treatment: payload.treatment,
                Unit: payload.unit,
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Field is successfully updated."
            })
        } catch (err) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating field."
            })
            console.error(err)
        }
    }

    fieldsFilter = async () => {
        const ref = query(collection(db, "Fields"), 
        where(FilterService.filterObj.field, FilterService.filterObj.operator, FilterService.filterObj.data))
        return getDocs(ref)
    }
    
    fieldSorter = async () => {
        const ref = query(collection(db, "Fields"), 
        orderBy(FilterService.sortObj.field, FilterService.sortObj.operator))
        return getDocs(ref)
    }
}

export default new FieldService()