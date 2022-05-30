import React from 'react'
import AddAnimalForm from './Entities/Animals/form.class'
import NewAnimal from './Entities/Animals/NewAnimal'
import NewCrop from '../Components/Entities/Crops/NewCrop'
import NewField from './Entities/Fields/NewField'
import NewVehicle from './Entities/Vehicles/NewVehicle'
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
                    { item === 'Animals' ? <NewAnimal form={Animalsform} /> : null }
                    { item === 'Crops' ? <NewCrop form={CropsForm} /> : null }
                    { item === 'Fields' ? <NewField form={FieldsForm} /> : null }
                    { item === 'Vehicles' ? <NewVehicle form={VehiclesForm} /> : null }
                </div>
            </div>
        </div>
    </>
  )
})

export default Modal