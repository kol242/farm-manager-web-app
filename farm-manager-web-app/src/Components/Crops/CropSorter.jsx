import React from 'react'
import { observer } from 'mobx-react'
import CropsStore from '../../Stores/CropsStore'
import SortService from '../../Common/Services/SortService'

const CropSorter = observer(() => {
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
                <option value="ProfitAsc">By profit ascending</option>
                <option value="ProfitDesc">By profit descending</option>
            </select>
            <button onClick={CropsStore.getSortedCrops}>Sort</button>
        </>
    )
})

export default CropSorter