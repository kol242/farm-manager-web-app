import { runInAction, makeAutoObservable } from 'mobx'
import FieldService from '../Common/Services/FieldService'

class FieldStore {
    Fields = []
    Field = {}
    modal = false
    filter = ""
    filterCheck = false
    addingCheck = false

    chartLabels = []
    chartSize = []

    filterArray = ['Quantity', 'Name', 'Cost', 'Size', 'Type', 'Profit', 'Crop', 'Treatment']
    sortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending','By size ascending',
        'By size descending','By crop ascending','By crop descending'
    ]

    lastVisible
    itemsLenght = 6

    constructor() {
        makeAutoObservable(this)
    }

    addingChecker = () => {
        this.addingCheck ? this.addingCheck = false : this.addingCheck = true
    }

    modalHandler = (data) => {
        this.Field = data
        this.modal ? this.modal = false : this.modal = true
    }

    filterType = (type) => {
        this.filter = type
        FieldService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck ? this.filterCheck = false : this.filterCheck = true
    }

    pushFields = async (documentSnapshot) => {
        const filtered = await documentSnapshot.docs
        runInAction(() => {
            this.Fields = filtered.map(doc => {
                return {
                    docId: doc.id,
                    name: doc.data().Name,
                    type: doc.data().Type,
                    quantity: doc.data().Quantity,
                    cost: doc.data().Cost,
                    descr: doc.data().Description,
                    size: doc.data().Size,
                    crop: doc.data().Crop,
                    treatment: doc.data().Treatment,
                    unit: doc.data().Unit
                }
            })
            this.lastVisible = filtered[filtered.length - 1]
            this.chartLabels = filtered.map(doc => {
                return doc.data().Name
            })
            this.chartSize = filtered.map(doc => {
                return doc.data().Size
            })
        })
    }

    nextItems = async () => {
        const documentSnapshot = await FieldService.nextItems(this.lastVisible)
        runInAction(() => {
            const data = documentSnapshot.docs
            data.map(doc => {
                return this.Fields.push(
                    {
                        docId: doc.id,
                        name: doc.data().Name,
                        type: doc.data().Type,
                        quantity: doc.data().Quantity,
                        cost: doc.data().Cost,
                        descr: doc.data().Description,
                        size: doc.data().Size,
                        crop: doc.data().Crop,
                        treatment: doc.data().Treatment,
                        unit: doc.data().Unit
                    }   
                ) 
            })
            this.lastVisible = data[data.length - 1]
            this.itemsLenght = documentSnapshot.docs.length
        })
    }

    getFields = async () => {
        const documentSnapshot = await FieldService.getFields()
        runInAction(() => {
            this.itemsLenght = 5
            this.pushFields(documentSnapshot)
        })
    }

    getFilteredFields = async () => {
        const documentSnapshot = await FieldService.fieldsFilter()
        runInAction(() => {
            this.pushFields(documentSnapshot)
        })
    }

    getSortedItems = async () => {
        const documentSnapshot = await FieldService.fieldSorter() 
        runInAction(() => {
            this.pushFields(documentSnapshot)
        })
    }

    deleteField = async (id) => {
        await FieldService.deleteField(id)
        runInAction(() => {
            this.getFields()    
        })
    }

    updateField = async (payload) => {
        FieldService.updateField(payload, this.Field.docId)
        this.modal = false
        this.getFields()
    }

}

export default new FieldStore()