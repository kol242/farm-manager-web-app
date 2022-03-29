import { runInAction, makeAutoObservable } from 'mobx'
import AuthService from '../Common/Services/AuthService'
import DeleteService from '../Common/Services/DeleteService'
import FilterService from '../Common/Services/FilterService'
import ReadService from '../Common/Services/ReadService'
import SortService from '../Common/Services/SortService'
import UpdateService from '../Common/Services/UpdateService'

class VehicleStore {
    Vehicles = []
    Vehicle = {}
    modal = false
    filter = ""
    filterCheck = false

    constructor() {
        makeAutoObservable(this)
    }

    modalHandler = (data) => {
        this.Vehicle = data
        this.modal ? this.modal = false : this.modal = true
    }

    filterType = (type) => {
        this.filter = type
        FilterService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck ? this.filterCheck = false : this.filterCheck = true
    }

    pushVehicles = async (documentSnapshot) => {
        const filtered = await documentSnapshot.docs.filter(doc => doc.data().User === AuthService.currentUser.uid)
        runInAction(() => {
            this.Vehicles = filtered.map(doc => {
                return {
                    docId: doc.id,
                    name: doc.data().Name,
                    type: doc.data().Type,
                    quantity: doc.data().Quantity,
                    cost: doc.data().Cost,
                    descr: doc.data().Description
                }
            }) 
        })
    }

    getVehicles = async () => {
        const documentSnapshot = await ReadService.getVehicles()
        runInAction(() => {
            this.pushVehicles(documentSnapshot)
        })
    }

    getFilteredVehicles = async () => {
        const documentSnapshot = await FilterService.vehiclesFilter()
        runInAction(() => {
            this.pushVehicles(documentSnapshot)
        })
    }

    getSortedVehicles = async () => {
        const documentSnapshot = await SortService.vehicleSorter() 
        runInAction(() => {
            this.pushVehicles(documentSnapshot)
        })
    }

    deleteVehicle = async (id) => {
        await DeleteService.deleteVehicle(id)
        runInAction(() => {
            this.getVehicles()    
        })
    }

    updateVehicle = async (payload) => {
        UpdateService.updateVehicle(payload, this.Vehicle.docId)
        this.modal = false
        this.getVehicles()
    }

}

export default new VehicleStore()