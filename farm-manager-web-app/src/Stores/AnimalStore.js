import { runInAction, makeAutoObservable } from 'mobx'
import AnimalService from '../Common/Services/AnimalService'
import FilterService from '../Common/Services/FilterService'

class AnimalStore {
    Animals = []
    Animal = {}
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

    addingChecker = () => {
        this.addingCheck ? this.addingCheck = false : this.addingCheck = true
    }

    modalHandler = (data) => {
        this.Animal = data
        this.modal ? this.modal = false : this.modal = true
    }

    InfoModalHandler = (data) => {
        this.Animal = data
        this.InfoModal ? this.InfoModal = false : this.InfoModal = true
    }

    filterType = (type) => {
        this.filter = type
        FilterService.filterField(type)
    }

    filterChecker = () => {
        this.filterCheck ? this.filterCheck = false : this.filterCheck = true
    }

    pushAnimals = async (documentSnapshot) => {
        const data = await documentSnapshot.docs
        runInAction(() => {
            this.Animals = data.map(doc => {
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
        const documentSnapshot = await AnimalService.nextItems(this.lastVisible)
        runInAction(() => {
            const data = documentSnapshot.docs
            data.map(doc => {
                return this.Animals.push(
                    {
                        docId: doc.id,
                        name: doc.data().Name,
                        type: doc.data().Type,
                        quantity: doc.data().Quantity,
                        cost: doc.data().Cost,
                        descr: doc.data().Description,
                        product: doc.data().Product,
                        profit: doc.data().Profit
                    }   
                ) 
            })
            this.lastVisible = data[data.length - 1]
            this.itemsLenght = documentSnapshot.docs.length
        })
    }

    getAnimals = async () => {
        const documentSnapshot = await AnimalService.getAnimals()
        runInAction(() => {
            this.itemsLenght = 5
            this.pushAnimals(documentSnapshot)
        })
    }

    getFilteredAnimals = async () => {
        const documentSnapshot = await AnimalService.filterGet(FilterService.filterObj)
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    getSortedItems = async () => {
        const documentSnapshot = await AnimalService.animalSorter() 
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    deleteAnimal = async (id) => {
        await AnimalService.deleteAnimal(id)
        runInAction(() => {
            this.getAnimals()    
        })
    }

    updateAnimal = async (payload) => {
        AnimalService.updateAnimal(payload, this.Animal.docId)
        this.modal = false
        this.getAnimals()
    }

}

export default new AnimalStore()