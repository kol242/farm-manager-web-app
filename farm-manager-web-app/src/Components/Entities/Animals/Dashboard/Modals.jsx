import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../../../Stores/AnimalStore'
import Modal from '../../../Modal'
import EditAnimal from '../EditAnimal'
import InfoModal from '../InfoModal'

const Modals = observer(() => {
  return (
    <>
        { AnimalStore.modal ? <EditAnimal /> : null }
        { AnimalStore.InfoModal ? <InfoModal /> : null }
        { AnimalStore.addingCheck ? <Modal item='Animals' store={AnimalStore} /> : null }
    </>
  )
})

export default Modals