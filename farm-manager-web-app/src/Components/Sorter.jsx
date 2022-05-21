import React from 'react'
import { observer } from 'mobx-react'
import FilterService from '../Common/Services/FilterService'

const VehicleSorter = observer(({ array, store }) => {
    const field = (e) => {
        FilterService.sortType(e.target.value)
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