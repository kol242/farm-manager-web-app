import { addDoc, collection, deleteDoc, doc, documentId, endBefore, FieldPath, getDocs, limit, limitToLast, orderBy, query, startAfter, updateDoc, where } from 'firebase/firestore'
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
            const user = await AuthService.currentUser.uid
            const ref = query(
            collection(db, "Animals"), 
            limit(5),
            where("User", "==", user),
            orderBy("Name")) 
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

    nextItems = async (lastData) => {
        const user = await AuthService.currentUser.uid
        const ref = query(collection(db, "Animals"), 
        where("User", "==", user),
        orderBy("Name"), 
        startAfter(lastData), limit(5))
        return getDocs(ref)   
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
    
    animalSorter = async () => {
        const ref = query(collection(db, "Animals"), 
        orderBy(FilterService.sortObj.field, FilterService.sortObj.operator))
        return getDocs(ref)
    }

    nextPage = (lastData, sortingType) => {
        const ref = query(collection(db, "Animals"), 
        orderBy(sortingType.field, sortingType.operator), 
        startAfter(lastData), limit(7))
        return getDocs(ref)   
    }

    prevPage = (firstData, sortingType) => {
        const ref = query(collection(db, "Animals"), 
        orderBy(sortingType.field, sortingType.operator), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }

    filterGet = (filterData) => {
        const ref = query(collection(db, "Animals"), 
        where(filterData.field, filterData.operator, filterData.data), 
        limit(7))
        return getDocs(ref)
    }

    filterNextPage = (filterData, lastData) => {
        const ref = query(collection(db, "Animals"), 
        where(filterData.field, filterData.operator, filterData.data), 
        startAfter(lastData), 
        limit(7))
        return getDocs(ref)   
    }

    filterPrevPage = (filterData, firstData) => {
        const ref = query(collection(db, "Animals"), 
        where(filterData.field, filterData.operator, filterData.data), 
        orderBy(documentId(FieldPath)), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }

}

export default new AnimalService()