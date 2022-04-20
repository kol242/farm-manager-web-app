import React from 'react'
import '../Common/Style/home.scss'
import AuthService from '../Common/Services/AuthService'
import Sidebar from '../Components/Sidebar'
import { observer } from 'mobx-react'
import CropsStore from '../Stores/CropsStore'
import AnimalStore from '../Stores/AnimalStore'
import FieldStore from '../Stores/FieldStore'
import LineChart from '../Components/Charts/LineChart'
import BarChart from '../Components/Charts/BarChart'

const Homepage = observer(() => {
  return (
    <div className="content-home">
      <Sidebar />
      <div className="body">
        <div className="body-title">
          <h1>Welcome <span>{AuthService.userData.username}</span></h1> 
          <p id="body-subtitle">From here you can manage your daily tasks on farm or just keep track of your crops, livestock, vehicles or fields.</p>
          <p id="body-subtitle">To continue, enter one of the dashboards located on sidebar.</p>
        </div>
        <div className="body-content">
          <h2>Farm analytics</h2>
          <div className="charts">
            <div className="chart">
              { CropsStore.crops.length <= 1 ? null : 
                <LineChart store={CropsStore} />
              }
            </div>  
            <div className="chart">
              { AnimalStore.Animals.length <= 1 ? null : 
                <LineChart store={AnimalStore} />
              }
            </div>  
            <div className="chart">
              { FieldStore.Fields.length <= 1 ? null : 
                <BarChart store={FieldStore} />
              }
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
})

export default Homepage