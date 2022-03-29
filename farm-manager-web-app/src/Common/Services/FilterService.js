import { collection, getDocs, query, where } from 'firebase/firestore'
import { makeAutoObservable } from 'mobx'
import {db} from '../firebase-config'

class FilterService {
    filterObj = {
        field: "",
        operator: "",
        data: ""
    }

    constructor() {
        makeAutoObservable(this)
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

    cropsFilter = async () => {
        const ref = query(collection(db, "Crops"), 
        where(this.filterObj.field, this.filterObj.operator, this.filterObj.data))
        return getDocs(ref)
    }

    fieldsFilter = async () => {
        const ref = query(collection(db, "Fields"), 
        where(this.filterObj.field, this.filterObj.operator, this.filterObj.data))
        return getDocs(ref)
    }

    animalsFilter = async () => {
        const ref = query(collection(db, "Animals"), 
        where(this.filterObj.field, this.filterObj.operator, this.filterObj.data))
        return getDocs(ref)
    }

    vehiclesFilter = async () => {
        const ref = query(collection(db, "Vehicles"), 
        where(this.filterObj.field, this.filterObj.operator, this.filterObj.data))
        return getDocs(ref)
    }
}

export default new FilterService()