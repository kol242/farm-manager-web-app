import { runInAction, makeAutoObservable } from 'mobx'
import DeleteService from '../Common/Services/DeleteService'
import ReadService from '../Common/Services/ReadService'
import UpdateService from '../Common/Services/UpdateService'

class CropsStore {
    crops = []
    crop = {}
    modal = false

    constructor() {
        makeAutoObservable(this)
    }

    modalHandler = (data) => {
        this.crop = data
        this.modal ? this.modal = false : this.modal = true
    }

    getCrops = async () => {
        const documentSnapshot = await ReadService.getCrops()
        runInAction(() => {
            this.crops = documentSnapshot.docs.map(doc => {
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