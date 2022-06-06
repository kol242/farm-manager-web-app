import { runInAction, makeAutoObservable } from 'mobx'
import FilterService from '../Common/Services/FilterService'
import VehicleService from '../Common/Services/VehicleService'

class VehicleStore {
    Vehicles = []
    Vehicle = {}
    modal = false
    InfoModal = false
    filter = ""
    filterCheck = false
    addingCheck = false

    chartLabels = []
    chartCost = []

    lastVisible
    itemsLenght = 6

    constructor() {
        makeAutoObservable(this)
    }

    addingChecker = () => {
        this.addingCheck = !this.addingCheck
    }

    modalHandler = (data) => {
        this.Vehicle = data
        this.modal = !this.modal 
    }

    InfoModalHandler = (data) => {
        this.Vehicle = data
        this.InfoModal = !this.InfoModal 
    }

    filterType = (type) => {
        this.filter = type
        FilterService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck = !this.filterCheck
    }

    pushVehicles = async (documentSnapshot) => {
        const data = await documentSnapshot.docs
        runInAction(() => {
            this.Vehicles = data.map(doc => {
                return {
                    docId: doc.id,
                    name: doc.data().Name,
                    type: doc.data().Type,
                    quantity: doc.data().Quantity,
                    cost: doc.data().Cost,
                    descr: doc.data().Description
                }
            }) 
            this.lastVisible = data[data.length - 1]
            this.chartLabels = data.map(doc => {
                return doc.data().Name
            })
            this.chartCost = data.map(doc => {
                return doc.data().Cost
            })
        })
    }

    nextItems = async () => {
        const documentSnapshot = await VehicleService.nextItems(this.lastVisible)
        runInAction(() => {
            const data = documentSnapshot.docs
            data.map(doc => {
                return this.Vehicles.push(
                    {
                        docId: doc.id,
                        name: doc.data().Name,
                        type: doc.data().Type,
                        quantity: doc.data().Quantity,
                        cost: doc.data().Cost,
                        descr: doc.data().Description
                    }   
                ) 
            })
            this.lastVisible = data[data.length - 1]
            this.itemsLenght = documentSnapshot.docs.length
        })
    }

    getVehicles = async () => {
        const documentSnapshot = await VehicleService.getVehicles()
        runInAction(() => {
            this.itemsLenght = 5
            this.pushVehicles(documentSnapshot)
        })
    }

    getFilteredVehicles = async () => {
        const documentSnapshot = await VehicleService.vehiclesFilter()
        runInAction(() => {
            this.pushVehicles(documentSnapshot)
        })
    }

    getSortedItems = async () => {
        const documentSnapshot = await VehicleService.vehicleSorter() 
        runInAction(() => {
            this.pushVehicles(documentSnapshot)
        })
    }

    deleteVehicle = async (id) => {
        await VehicleService.deleteVehicle(id)
        runInAction(() => {
            this.getVehicles()    
        })
    }

    updateVehicle = async (payload) => {
        VehicleService.updateVehicle(payload, this.Vehicle.docId)
        this.modal = false
        this.getVehicles()
    }

}

export default new VehicleStore()