import { observer } from 'mobx-react'
import React from 'react'
import FieldStore from '../../../../Stores/FieldStore'
import Modal from '../../../Modal'
import EditField from '../EditField'
import InfoModal from '../InfoModal'

const Modals = observer(() => {
  return (
    <>
        { FieldStore.modal ? <EditField /> : null }
        { FieldStore.InfoModal ? <InfoModal /> : null }
        { FieldStore.addingCheck ? <Modal item='Fields' store={FieldStore} /> : null }
    </>
  )
})

export default Modals