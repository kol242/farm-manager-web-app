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
    addingCheck = false

    chartLabels = []
    chartProfit = []
    chartCost = []

    filterArray = ['Quantity', 'Name', 'Cost', 'Product', 'Type']
    sortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending','By product ascending',
        'By product descending','By profit ascending','By profit descending'
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addingChecker = () => {
        this.addingCheck ? this.addingCheck = false : this.addingCheck = true
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