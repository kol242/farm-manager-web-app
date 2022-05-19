import { runInAction, makeAutoObservable } from 'mobx'
import AuthService from '../Common/Services/AuthService'
import DeleteService from '../Common/Services/DeleteService'
import FilterService from '../Common/Services/FilterService'
import ReadService from '../Common/Services/ReadService'
import SortService from '../Common/Services/SortService'
import UpdateService from '../Common/Services/UpdateService'

class CropsStore {
    crops = []
    crop = {}
    modal = false
    filter = ""
    filterCheck = false
    addingCheck = false

    chartLabels = []
    chartProfit = []
    chartCost = []

    filterArray = ['Quantity', 'Name', 'Cost', 'Product', 'Type', 'Profit', 'Harvested', 'State']
    sortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending','By profit ascending',
        'By profit descending'
    ]

    constructor() {
        makeAutoObservable(this)
    }

    modalHandler = (data) => {
        this.crop = data
        this.modal ? this.modal = false : this.modal = true
    }

    filterType = (type) => {
        this.filter = type
        FilterService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck ? this.filterCheck = false : this.filterCheck = true
    }

    addingChecker = () => {
        this.addingCheck ? this.addingCheck = false : this.addingCheck = true
    }

    pushCrops = async (documentSnapshot) => {
        const filtered = await documentSnapshot.docs.filter(doc => doc.data().User === AuthService.currentUser.uid)
        runInAction(() => {
            this.crops = filtered.map(doc => {
                return {
                    docId: doc.id,
                    name: doc.data().Name,
                    type: doc.data().Type,
                    quantity: doc.data().Quantity,
                    cost: doc.data().Cost,
                    descr: doc.data().Description,
                    state: doc.data().State,
                    harvested: doc.data().Harvested,
                    profit: doc.data().Profit,
                    unit: doc.data().Unit
                }
            }) 
            this.chartLabels = filtered.map(doc => {
                return doc.data().Name
            })
            this.chartProfit = filtered.map(doc => {
                return doc.data().Profit
            })
            this.chartCost = filtered.map(doc => {
                return doc.data().Cost
            })
        })
    }

    getCrops = async () => {
        const documentSnapshot = await ReadService.getCrops()
        runInAction(() => {
            this.pushCrops(documentSnapshot)
        })
    }

    getFilteredCrops = async () => {
        const documentSnapshot = await FilterService.cropsFilter()
        runInAction(() => {
            this.pushCrops(documentSnapshot)
        })
    }

    getSortedCrops = async () => {
        const documentSnapshot = await SortService.cropSorter() 
        runInAction(() => {
            this.pushCrops(documentSnapshot)
        })
    }

    deleteCrop = async (id) => {
        await DeleteService.deleteCrop(id)
        runInAction(() => {
            this.getCrops()    
        })
    }

    updateCrop = async (payload) => {
        UpdateService.updateCrop(payload, this.crop.docId)
        this.modal = false
        this.getCrops()
    }

}

export default new CropsStore()