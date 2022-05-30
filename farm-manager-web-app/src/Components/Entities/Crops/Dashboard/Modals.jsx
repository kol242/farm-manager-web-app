import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../../../Stores/CropsStore'
import Modal from '../../../Modal'
import EditCrop from '../EditCrop'
import InfoModal from '../InfoModal'

const Modals = observer(() => {
  return (
    <>
        { CropsStore.modal ? <EditCrop /> : null }
        { CropsStore.InfoModal ? <InfoModal /> : null }
        { CropsStore.addingCheck ? <Modal item='Crops' store={CropsStore} /> : null }
    </>
  )
})

export default Modals