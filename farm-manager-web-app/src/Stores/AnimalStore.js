import { runInAction, makeAutoObservable } from 'mobx'
import AnimalService from '../Common/Services/AnimalService'
import AuthService from '../Common/Services/AuthService'

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

    currentPage
    postsPerPage 
    indexOfFirstPost 
    indexOfLastPost
    currentPosts 

    constructor() {
        makeAutoObservable(this)
        console.log(this.Animals)
        this.currentPage = 1
        this.postsPerPage = 5
        this.indexOfFirstPost = this.indexOfLastPost - this.postsPerPage
        this.indexOfLastPost = this.currentPage * this.postsPerPage
        this.currentPosts = this.Animals.slice(this.indexOfFirstPost, this.indexOfLastPost)
    }

    paginate = (pageNumber) => {
        return this.currentPage = pageNumber
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
        const documentSnapshot = await AnimalService.getAnimals()
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    getFilteredAnimals = async () => {
        const documentSnapshot = await AnimalService.animalsFilter()
        runInAction(() => {
            this.pushAnimals(documentSnapshot)
        })
    }

    getSortedAnimals = async () => {
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