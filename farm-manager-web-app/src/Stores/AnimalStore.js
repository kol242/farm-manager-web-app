import { runInAction, makeAutoObservable } from 'mobx'
import AnimalService from '../Common/Services/AnimalService'
import FilterService from '../Common/Services/FilterService'

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

    lastVisible
    itemsLenght = 5

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
        AnimalService.filterField(type)
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

    prevPage = async () => {
        const documentSnapshot = await ( 
            this.filterCheck ? AnimalService.filterPrevPage(FilterService.filterObj, this.firstVisible) 
            : AnimalService.prevPage(this.firstVisible, FilterService.sortObj))
        runInAction(() => {
            this.prevLength = documentSnapshot.docs.length
            if(this.nextLength < 7) {
                this.nextLength = 7
            }
            this.pushAnimals(documentSnapshot)
        })
    }

    nextPage = async () => {
        const documentSnapshot = await ( 
            this.filterCheck ? AnimalService.filterNextPage(FilterService.filterObj, this.lastVisible) 
            : AnimalService.nextPage(this.lastVisible, FilterService.sortObj))
        runInAction(() => {
            this.nextLength = documentSnapshot.docs.length
            if(this.prevLength < 7) {
                this.prevLength = 7
            }
            this.pushAnimals(documentSnapshot)
            console.log(this.Animals)
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