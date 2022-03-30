import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { makeAutoObservable } from 'mobx'
import {db} from '../firebase-config'

class SortService {
    sortObj = {
        field: "",
        operator: ""
    }

    constructor() {
        makeAutoObservable(this)
    }

    sortType = (type) => {
        switch (type) {
            case 'NameAsc':
                this.sortObj = {
                    field: 'Name',
                    operator: 'asc'
                }
                break;
            case 'NameDesc':
                this.sortObj = {
                    field: 'Name',
                    operator: 'desc'
                }
                break;
            case 'TypeAsc':
                this.sortObj = {
                    field: 'Type',
                    operator: 'asc'
                }
                break;
            case 'TypeDesc':
                this.sortObj = {
                    field: 'Type',
                    operator: 'desc'
                }
                break;
            case 'QuantityAsc':
                this.sortObj = {
                    field: 'Quantity',
                    operator: 'asc'
                }
                break;
            case 'QuantityDesc':
                this.sortObj = {
                    field: 'Quantity',
                    operator: 'desc'
                }
                break;
            case 'ProfitAsc':
                this.sortObj = {
                    field: 'Profit',
                    operator: 'asc'
                }
                break;
            case 'ProfitDesc':
                this.sortObj = {
                    field: 'Profit',
                    operator: 'desc'
                }
                break;
            case 'CostAsc':
                this.sortObj = {
                    field: 'Cost',
                    operator: 'asc'
                }
                break;
            case 'CostDesc':
                this.sortObj = {
                    field: 'Cost',
                    operator: 'desc'
                }
                break;
            case 'CropAsc':
                this.sortObj = {
                    field: 'Crop',
                    operator: 'asc'
                }
                break;
            case 'CropDesc':
                this.sortObj = {
                    field: 'Crop',
                    operator: 'desc'
                }
                break;
            case 'ProductAsc':
                this.sortObj = {
                    field: 'Product',
                    operator: 'asc'
                }
                break;
            case 'ProductDesc':
                this.sortObj = {
                    field: 'Product',
                    operator: 'desc'
                }
                break;
            case 'SizeAsc':
                this.sortObj = {
                    field: 'Size',
                    operator: 'asc'
                }
                break;
            case 'SizeDesc':
                this.sortObj = {
                    field: 'Size',
                    operator: 'desc'
                }
                break;
            default:
                break;
        }
    }

    cropSorter = async () => {
        const ref = query(collection(db, "Crops"), 
        orderBy(this.sortObj.field, this.sortObj.operator))
        return getDocs(ref)
    }

    fieldSorter = async () => {
        const ref = query(collection(db, "Fields"), 
        orderBy(this.sortObj.field, this.sortObj.operator))
        return getDocs(ref)
    }

    animalSorter = async () => {
        const ref = query(collection(db, "Animals"), 
        orderBy(this.sortObj.field, this.sortObj.operator))
        return getDocs(ref)
    }

    vehicleSorter = async () => {
        const ref = query(collection(db, "Vehicles"), 
        orderBy(this.sortObj.field, this.sortObj.operator))
        return getDocs(ref)
    }
}

export default new SortService()