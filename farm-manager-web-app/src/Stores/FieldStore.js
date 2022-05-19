import { runInAction, makeAutoObservable } from 'mobx'
import AuthService from '../Common/Services/AuthService'
import DeleteService from '../Common/Services/DeleteService'
import FilterService from '../Common/Services/FilterService'
import ReadService from '../Common/Services/ReadService'
import SortService from '../Common/Services/SortService'
import UpdateService from '../Common/Services/UpdateService'

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
        FilterService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck ? this.filterCheck = false : this.filterCheck = true
    }

    pushFields = async (documentSnapshot) => {
        const filtered = await documentSnapshot.docs.filter(doc => doc.data().User === AuthService.currentUser.uid)
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
            this.chartLabels = filtered.map(doc => {
                return doc.data().Name
            })
            this.chartSize = filtered.map(doc => {
                return doc.data().Size
            })
        })
    }

    getFields = async () => {
        const documentSnapshot = await ReadService.getFields()
        runInAction(() => {
            this.pushFields(documentSnapshot)
        })
    }

    getFilteredFields = async () => {
        const documentSnapshot = await FilterService.fieldsFilter()
        runInAction(() => {
            this.pushFields(documentSnapshot)
        })
    }

    getSortedFields = async () => {
        const documentSnapshot = await SortService.fieldSorter() 
        runInAction(() => {
            this.pushFields(documentSnapshot)
        })
    }

    deleteField = async (id) => {
        await DeleteService.deleteField(id)
        runInAction(() => {
            this.getFields()    
        })
    }

    updateField = async (payload) => {
        UpdateService.updateField(payload, this.Field.docId)
        this.modal = false
        this.getFields()
    }

}

export default new FieldStore()