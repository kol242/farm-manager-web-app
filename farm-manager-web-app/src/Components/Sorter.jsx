import React from 'react'
import { observer } from 'mobx-react'
import SortService from '../Common/Services/SortService'

const VehicleSorter = observer(({ array, store }) => {
    const field = (e) => {
        SortService.sortType(e.target.value)
    }

    return (
        <>
            <select defaultValue={'default'} name="sorter" onChange={field}>
                { array.map((item) => (
                    <option value={item}>{item}</option>
                )) }
            </select>
            <button id="btn-primary" onClick={store}>Sort</button>
        </>
    )
})

export default VehicleSorter