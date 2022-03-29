import { runInAction, makeAutoObservable } from 'mobx'
import AuthService from '../Common/Services/AuthService'
import DeleteService from '../Common/Services/DeleteService'
import FilterService from '../Common/Services/FilterService'
import ReadService from '../Common/Services/ReadService'
import SortService from '../Common/Services/SortService'
import UpdateService from '../Common/Services/UpdateService'

class AnimalStore {
    Animals = []
    Animal = {}
    modal = false
    filter = ""
    filterCheck = false

    constructor() {
        makeAutoObservable(this)
    }

    modalHandler = (data) => {
        this.Animal = data
        this.modal ? this.modal = false : this.modal = true
    }

    filterType = (type) => {
        this.filter = type
        FilterService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck ? this.filterCheck = false : this.filterCheck = true
    }

    pushAnimals = async (documentSnapshot) => {
        const filtered = await documentSnapshot.docs.filter(doc => doc.data().User === AuthService.currentUser.uid)
        runInAction(() => {
            this.Animals = filtered.map(doc => {
                return {
                    docId: doc.id,
                    name: doc.data().Name,
                    type: doc.data().Type,
                    quantity: doc.data().Quantity,
                    cost: doc.data().Cost,
                    descr: doc.data().Description,
                    product: doc.data().Product,
                    profit: doc.data().Profit
                }
            }) 
        })
    }

    getAnimals = async () => {
        const documentSnapshot = await ReadService.getAnimals()
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    getFilteredAnimals = async () => {
        const documentSnapshot = await FilterService.animalsFilter()
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    getSortedAnimals = async () => {
        const documentSnapshot = await SortService.animalSorter() 
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    deleteAnimal = async (id) => {
        await DeleteService.deleteAnimal(id)
        runInAction(() => {
            this.getAnimals()    
        })
    }

    updateAnimal = async (payload) => {
        UpdateService.updateAnimal(payload, this.Animal.docId)
        this.modal = false
        this.getAnimals()
    }

}

export default new AnimalStore()