class Units {
    AnimalFilterArray = ['Quantity', 'Name', 'Cost', 'Product', 'Type']
    AnimalSortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending','By product ascending',
        'By product descending','By profit ascending','By profit descending'
    ]

    CropFilterArray = ['Quantity', 'Name', 'Cost', 'Product', 'Type', 'Profit', 'Harvested', 'State']
    CropSortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending','By profit ascending',
        'By profit descending'
    ]

    FieldFilterArray = ['Quantity', 'Name', 'Cost', 'Size', 'Type', 'Profit', 'Crop', 'Treatment']
    FieldSortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending','By size ascending',
        'By size descending','By crop ascending','By crop descending'
    ]

    VehicleFilterArray = ['Quantity', 'Name', 'Cost', 'Type', 'Profit']
    VehicleSortArray = [
        'By name ascending','By name descending','By type ascending',
        'By type descending','By quantity ascending','By quantity descending',
        'By cost ascending','By cost descending'
    ]

    weight = ['kg', 'lb', 't']
    harvested = ['Yes', 'No']
    size = ['km2', 'ha', 'a']
}

export default new Units()