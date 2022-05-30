import { observer } from 'mobx-react'
import React from 'react'
import Units from '../../../../Stores/Units'
import VehicleStore from '../../../../Stores/VehicleStore'
import Filter from '../../../Filter'
import Sorter from '../../../Sorter'

const Header = observer(() => {
  return (
    <div className="body-content__header">
        <Sorter store={VehicleStore} array={Units.VehicleSortArray}/> 
        <button id="btn-primary" onClick={VehicleStore.filterChecker}>Filter</button>
        { VehicleStore.filterCheck ? <Filter store={VehicleStore.getFilteredVehicles} array={Units.VehicleFilterArray}/> : null }
    </div>
  )
})

export default Header