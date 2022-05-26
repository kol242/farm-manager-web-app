import React from 'react'
import { observer } from 'mobx-react'
import Filter from '../../Components/Filter'
import Sorter from '../../Components/Sorter'
import VehicleModal from '../../Components/Entities/Vehicles/VehicleModal'
import VehicleStore from '../../Stores/VehicleStore'
import '../../Common/Style/home.scss'
import Sidebar from '../../Components/Sidebar'
import ItemList from '../../Components/ItemList'
import Modal from '../../Components/Modal'
import PaginateScroll from '../../Components/PaginateScroll'

const Vehicles = observer(() => {
    return (
        <div className="content-home">
            { VehicleStore.modal ? <VehicleModal /> : null }
            { VehicleStore.addingCheck ? <Modal item='Vehicles' store={VehicleStore} /> : null }
            <Sidebar />
            <div className="body">
                <div className="body-content">
                    <div className="body-content__header">
                        <Sorter store={VehicleStore}/> 
                        <button id="btn-primary" onClick={VehicleStore.filterChecker}>Filter</button>
                        { VehicleStore.filterCheck ? <Filter store={VehicleStore.getFilteredVehicles} array={VehicleStore.filterArray}/> : null }
                    </div>
                    <button id="btn-add" onClick={VehicleStore.addingChecker}>New vehicle</button>
                    <div className="body-content__main">
                        { VehicleStore.Vehicles.length === 0 ? <p>No vehicles to show. Please add new vehicle.</p> : 
                        <ItemList items={VehicleStore.Vehicles} deleteCrop={VehicleStore.deleteVehicle} editCrop={VehicleStore.modalHandler}/> }    
                    </div>
                    <div className="body-content__foot">
                        { VehicleStore.Vehicles.length > 0 ? <PaginateScroll store={VehicleStore} /> : null }    
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Vehicles