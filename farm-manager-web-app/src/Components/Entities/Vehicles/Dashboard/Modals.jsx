import { observer } from 'mobx-react'
import React from 'react'
import VehicleStore from '../../../../Stores/VehicleStore'
import Modal from '../../../Modal'
import EditVehicle from '../EditVehicle'
import InfoModal from '../InfoModal'

const Modals = observer(() => {
  return (
    <>
        { VehicleStore.modal ? <EditVehicle /> : null }
        { VehicleStore.InfoModal ? <InfoModal /> : null }
        { VehicleStore.addingCheck ? <Modal item='Vehicles' store={VehicleStore} /> : null }
    </>
  )
})

export default Modals