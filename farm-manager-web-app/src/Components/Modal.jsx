import React from 'react'
import AddAnimalForm from './Entities/Animals/form.class'
import AnimalForm from '../Components/Entities/Animals/AnimalForm'
import CropForm from '../Components/Entities/Crops/CropForm'
import FieldForm from '../Components/Entities/Fields/FieldForm'
import VehicleForm from '../Components/Entities/Vehicles/VehicleForm'
import AddCropForm from './Entities/Crops/form.class'
import AddFieldForm from './Entities/Fields/form.class'
import AddVehicleForm from './Entities/Vehicles/form.class'
import { observer } from 'mobx-react'

const Animalsform = new AddAnimalForm()
const CropsForm = new AddCropForm()
const FieldsForm = new AddFieldForm()
const VehiclesForm = new AddVehicleForm()

const Modal = observer(({ item, store }) => {
  return (
    <>
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <p>Create {item}</p>
                    <span className="close" onClick={store.addingChecker}>&times;</span>
                </div>
                <hr />
                <div className="modal-body">
                    { item === 'Animals' ? <AnimalForm form={Animalsform} /> : null }
                    { item === 'Crops' ? <CropForm form={CropsForm} /> : null }
                    { item === 'Fields' ? <FieldForm form={FieldsForm} /> : null }
                    { item === 'Vehicles' ? <VehicleForm form={VehiclesForm} /> : null }
                </div>
            </div>
        </div>
    </>
  )
})

export default Modal