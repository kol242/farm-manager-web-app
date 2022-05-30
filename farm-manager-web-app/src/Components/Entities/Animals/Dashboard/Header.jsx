import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../../../Stores/AnimalStore'
import Units from '../../../../Stores/Units'
import Filter from '../../../Filter'
import Sorter from '../../../Sorter'

const Header = observer(() => {
  return (
    <div className="body-content__header">
        <Sorter store={AnimalStore} array={Units.AnimalSortArray}/> 
        <button id="btn-primary" onClick={AnimalStore.filterChecker}>Filter</button>
        { AnimalStore.filterCheck ? <Filter store={AnimalStore.getFilteredAnimals} array={Units.AnimalFilterArray}/> : null }
    </div>
  )
})

export default Header