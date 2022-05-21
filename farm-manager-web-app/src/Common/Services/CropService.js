import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'
import { makeAutoObservable } from 'mobx'
import CropsStore from '../../Stores/CropsStore'
import ToastStore from '../../Stores/ToastStore'
import { db } from '../firebase-config'
import AuthService from './AuthService'
import FilterService from './FilterService'

class CropService {
    constructor() {
        makeAutoObservable(this)
    }

    filterType = (type) => {
        this.filterName = type
        this.filterField(type)
    }

    filterData = (input) => {
        this.filterObj.data = input
    } 
    
    filterField = (type) => {
        this.filterObj.field = type
        if (this.filterObj.field === 'Name' || 'Type' || 'Harvested' || 'State') {
            this.filterObj.operator = "=="
        }
    }

    filterOperator = (operator) => {
        this.filterObj.operator = operator
    }

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

    newCrop = async (payload) => {
        try {
            const collectionRef = collection(db, "Crops")
            await addDoc(collectionRef, {
                Name: payload.name,
                Type: payload.type,
                Quantity: Number(payload.quantity),
                Cost: Number(payload.cost),
                Description: payload.description,
                State: payload.state,
                Harvested: payload.harvested,
                Profit: Number(payload.profit),
                User: AuthService.currentUser.uid,
                Unit: payload.weight
            })
            CropsStore.getCrops()
            CropsStore.addingChecker()
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

    cropsFilter = async () => {
        const ref = query(collection(db, "Crops"), 
        where(FilterService.filterObj.field, FilterService.filterObj.operator, FilterService.filterObj.data))
        return getDocs(ref)
    }

    cropSorter = async () => {
        const ref = query(collection(db, "Crops"), 
        orderBy(FilterService.sortObj.field, FilterService.sortObj.operator))
        return getDocs(ref)
    }
}

export default new CropService()