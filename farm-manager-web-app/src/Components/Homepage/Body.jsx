import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../Stores/AnimalStore'
import CropsStore from '../../Stores/CropsStore'
import FieldStore from '../../Stores/FieldStore'
import BarChart from '../Charts/BarChart'
import LineChart from '../Charts/LineChart'

const Body = observer(() => {
  return (
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
  )
})

export default Body