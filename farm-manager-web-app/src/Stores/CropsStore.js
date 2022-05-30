import { runInAction, makeAutoObservable } from 'mobx'
import CropService from '../Common/Services/CropService'
import FilterService from '../Common/Services/FilterService'

class CropsStore {
    crops = []
    crop = {}
    modal = false
    InfoModal = false
    filter = ""
    filterCheck = false
    addingCheck = false

    chartLabels = []
    chartProfit = []
    chartCost = []

    lastVisible
    itemsLenght = 5

    constructor() {
        makeAutoObservable(this)
    }

    modalHandler = (data) => {
        this.crop = data
        this.modal ? this.modal = false : this.modal = true
    }

    InfoModalHandler = (data) => {
        this.crop = data
        this.InfoModal ? this.InfoModal = false : this.InfoModal = true
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
        const data = await documentSnapshot.docs
        runInAction(() => {
            this.crops = data.map(doc => {
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
            this.lastVisible = data[data.length - 1]
            this.chartLabels = data.map(doc => {
                return doc.data().Name
            })
            this.chartProfit = data.map(doc => {
                return doc.data().Profit
            })
            this.chartCost = data.map(doc => {
                return doc.data().Cost
            })
        })
    }

    nextItems = async () => {
        const documentSnapshot = await CropService.nextItems(this.lastVisible)
        runInAction(() => {
            const data = documentSnapshot.docs
            data.map(doc => {
                return this.crops.push(
                    {
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
                ) 
            })
            this.lastVisible = data[data.length - 1]
            this.itemsLenght = documentSnapshot.docs.length
        })
    }

    getCrops = async () => {
        const documentSnapshot = await CropService.getCrops()
        runInAction(() => {
            this.itemsLenght = 5
            this.pushCrops(documentSnapshot)
        })
    }

    getFilteredCrops = async () => {
        const documentSnapshot = await CropService.filterGet(FilterService.filterObj)
        runInAction(() => {
            this.pushCrops(documentSnapshot)
        })
    }

    getSortedItems = async () => {
        const documentSnapshot = await CropService.cropSorter() 
        runInAction(() => {
            this.pushCrops(documentSnapshot)
        })
    }

    deleteCrop = async (id) => {
        await CropService.deleteCrop(id)
        runInAction(() => {
            this.getCrops()    
        })
    }

    updateCrop = async (payload) => {
        CropService.updateCrop(payload, this.crop.docId)
        this.modal = false
        this.getCrops()
    }

}

export default new CropsStore()