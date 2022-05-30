import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../../../Stores/CropsStore'
import Units from '../../../../Stores/Units'
import Filter from '../../../Filter'
import Sorter from '../../../Sorter'

const Header = observer(() => {
  return (
    <div className="body-content__header">
        <Sorter store={CropsStore} array={Units.CropSortArray}/>
        <button id="btn-primary" onClick={CropsStore.filterChecker}>Filter</button>
        { CropsStore.filterCheck ? <Filter store={CropsStore.getFilteredCrops} array={Units.CropFilterArray}/> : null }
    </div>
  )
})

export default Header