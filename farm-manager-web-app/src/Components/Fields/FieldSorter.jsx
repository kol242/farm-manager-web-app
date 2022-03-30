import React from 'react'
import { observer } from 'mobx-react'
import SortService from '../../Common/Services/SortService'
import FieldStore from '../../Stores/FieldStore'

const FieldSorter = observer(() => {
    const field = (e) => {
        SortService.sortType(e.target.value)
    }

    return (
        <>
            <select defaultValue={'default'} name="sorter" onChange={field}>
                <option value="default" disabled>Sort...</option>
                <option value="NameAsc">By name ascending</option>
                <option value="NameDesc">By name descending</option>
                <option value="TypeAsc">By type ascending</option>
                <option value="TypeDesc">By type descending</option>
                <option value="QuantityAsc">By quantity ascending</option>
                <option value="QuantityDesc">By quantity descending</option>
                <option value="CostAsc">By cost ascending</option>
                <option value="CostDesc">By cost descending</option>
                <option value="SizeAsc">By size ascending</option>
                <option value="SizeDesc">By size descending</option>
                <option value="CropAsc">By crop ascending</option>
                <option value="CropDesc">By crop descending</option>
            </select>
            <button onClick={FieldStore.getSortedFields}>Sort</button>
        </>
    )
})

export default FieldSorter