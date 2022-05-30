import { observer } from 'mobx-react'
import React from 'react'
import VehicleStore from '../../../../Stores/VehicleStore'
import PaginateScroll from '../../../PaginateScroll'

const Footer = observer(() => {
  return (
    <div className="body-content__foot">
        { VehicleStore.Vehicles.length > 0 ? <PaginateScroll store={VehicleStore} /> : null }    
    </div>
  )
})

export default Footer