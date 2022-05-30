import { observer } from 'mobx-react-lite'
import React from 'react'
import FieldStore from '../../../../Stores/FieldStore'
import Units from '../../../../Stores/Units'
import Filter from '../../../Filter'
import Sorter from '../../../Sorter'

const Header = observer(() => {
  return (
    <div className="body-content__header">
        <Sorter store={FieldStore} array={Units.FieldSortArray}/> 
        <button id="btn-primary" onClick={FieldStore.filterChecker}>Filter</button>
        { FieldStore.filterCheck ? <Filter store={FieldStore.getFilteredFields} array={Units.FieldFilterArray}/> : null }
    </div>
  )
})

export default Header