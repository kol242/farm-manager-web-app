import { runInAction, makeAutoObservable } from 'mobx'
import FieldService from '../Common/Services/FieldService'
import FilterService from '../Common/Services/FilterService'

class FieldStore {
    Fields = []
    Field = {}
    modal = false
    InfoModal = false
    filter = ""
    filterCheck = false
    addingCheck = false

    chartLabels = []
    chartSize = []

    lastVisible
    itemsLenght = 5

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

    InfoModalHandler = (data) => {
        this.Field = data
        this.InfoModal ? this.InfoModal = false : this.InfoModal = true
    }

    filterType = (type) => {
        this.filter = type
        FilterService.filterField(type)
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