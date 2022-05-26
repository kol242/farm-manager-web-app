import { makeAutoObservable } from 'mobx'

class FilterService {
    filterObj = {
        field: "",
        operator: "",
        data: ""
    }

    filterName = ''

    sortObj = {
        field: "Name",
        operator: "asc"
    }

    constructor() {
        makeAutoObservable(this)
    }

    filterType = (type) => {
        this.filterName = type
        this.filterField(type)
    }

    filterData = (input) => {
        this.filterObj.data = input
    } 
    
    filterField = (type) => {
        this.filterObj.field = type
        if (this.filterObj.field === 'Name' || 'Type' || 'Harvested' || 'State') {
            this.filterObj.operator = "=="
        }
    }

    filterOperator = (operator) => {
        this.filterObj.operator = operator
    }

    sortType = (type) => {
        switch (type) {
            case 'By name ascending':
                this.sortObj = {
                    field: 'Name',
                    operator: 'asc'
                }
                break;
            case 'By name descending':
                this.sortObj = {
                    field: 'Name',
                    operator: 'desc'
                }
                break;
            case 'By type ascending':
                this.sortObj = {
                    field: 'Type',
                    operator: 'asc'
                }
                break;
            case 'By type descending':
                this.sortObj = {
                    field: 'Type',
                    operator: 'desc'
                }
                break;
            case 'By quantity ascending':
                this.sortObj = {
                    field: 'Quantity',
                    operator: 'asc'
                }
                break;
            case 'By quantity descending':
                this.sortObj = {
                    field: 'Quantity',
                    operator: 'desc'
                }
                break;
            case 'By profit ascending':
                this.sortObj = {
                    field: 'Profit',
                    operator: 'asc'
                }
                break;
            case 'By profit descending':
                this.sortObj = {
                    field: 'Profit',
                    operator: 'desc'
                }
                break;
            case 'By cost ascending':
                this.sortObj = {
                    field: 'Cost',
                    operator: 'asc'
                }
                break;
            case 'By cost descending':
                this.sortObj = {
                    field: 'Cost',
                    operator: 'desc'
                }
                break;
            case 'By crop ascending':
                this.sortObj = {
                    field: 'Crop',
                    operator: 'asc'
                }
                break;
            case 'By crop descending':
                this.sortObj = {
                    field: 'Crop',
                    operator: 'desc'
                }
                break;
            case 'By product ascending':
                this.sortObj = {
                    field: 'Product',
                    operator: 'asc'
                }
                break;
            case 'By product descending':
                this.sortObj = {
                    field: 'Product',
                    operator: 'desc'
                }
                break;
            case 'By size ascending':
                this.sortObj = {
                    field: 'Size',
                    operator: 'asc'
                }
                break;
            case 'By size descending':
                this.sortObj = {
                    field: 'Size',
                    operator: 'desc'
                }
                break;
            default:
                break;
        }
    }
}

export default new FilterService()