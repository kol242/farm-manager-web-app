import { addDoc, collection, deleteDoc, doc, documentId, endBefore, FieldPath, getDocs, limit, limitToLast, orderBy, query, startAfter, updateDoc, where } from 'firebase/firestore'
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

    getCrops = async () => {
        try {
            const user = await AuthService.currentUser.uid
            const ref = query(collection(db, "Crops"),
            limit(5),
            where("User", "==", user),
            orderBy("Name")) 
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

    nextItems = async (lastData) => {
        const user = await AuthService.currentUser.uid
        const ref = query(collection(db, "Crops"), 
        where("User", "==", user),
        orderBy("Name"), 
        startAfter(lastData), limit(5))
        return getDocs(ref)   
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

    nextPage = (lastData, sortingType) => {
        const ref = query(collection(db, "Crops"), 
        orderBy(sortingType.field, sortingType.operator), 
        startAfter(lastData), limit(7))
        return getDocs(ref)   
    }

    prevPage = (firstData, sortingType) => {
        const ref = query(collection(db, "Crops"), 
        orderBy(sortingType.field, sortingType.operator), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }

    filterGet = (filterData) => {
        const ref = query(collection(db, "Crops"), 
        where(filterData.field, filterData.operator, filterData.data), 
        limit(7))
        return getDocs(ref)
    }

    filterNextPage = (filterData, lastData) => {
        const ref = query(collection(db, "Crops"), 
        where(filterData.field, filterData.operator, filterData.data), 
        startAfter(lastData), 
        limit(7))
        return getDocs(ref)   
    }

    filterPrevPage = (filterData, firstData) => {
        const ref = query(collection(db, "Crops"), 
        where(filterData.field, filterData.operator, filterData.data), 
        orderBy(documentId(FieldPath)), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }

}

export default new CropService()