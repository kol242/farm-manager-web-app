import React from 'react'
import '../Common/Style/home.scss'
import AuthService from '../Common/Services/AuthService'
import Sidebar from '../Components/Sidebar'
import { observer } from 'mobx-react'
import { Chart, registerables } from 'chart.js';
import { Line, Bar } from 'react-chartjs-2'
import CropsStore from '../Stores/CropsStore'
import AnimalStore from '../Stores/AnimalStore'
import FieldStore from '../Stores/FieldStore'

Chart.register(...registerables);

const Homepage = observer(() => {
  return (
    <div className="content-home">
      <Sidebar />
      <div className="body">
        <div className="body-title">
          <h1>Welcome <span>{AuthService.userData.username}</span></h1> 
          <p id="body-subtitle">From here you can manage your daily tasks on farm or just keep track of your crops, livestock, vehicles or fields.</p>
          <p id="body-subtitle">Start managing your farm, today!.</p>
        </div>
        <div className="body-content">
          <h2>Farm analytics</h2>
          <div className="charts">
            <div className="chart">
              { CropsStore.crops.length <= 1 ? <p id="msg">No crops to show.</p> : 
                <Line
                  datasetIdKey='id'
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Crops'
                      }
                    }
                  }}
                  data={{
                    labels: CropsStore.chartLabels,
                    datasets: [
                      {
                        id: 1,
                        label: 'Profit',
                        data: CropsStore.chartProfit,
                        borderColor: '#78AF6A',
                        backgroundColor: '#78AF6A'
                      },
                      {
                        id: 2,
                        label: 'Cost',
                        data: CropsStore.chartCost,
                        backgroundColor: '#e26060',
                        borderColor: '#e26060'
                      },
                    ],
                  }}
                />   
              }
            </div>  
            <div className="chart">
              { AnimalStore.Animals.length <= 1 ? <p id="msg">No animals to show.</p> : 
                <Line
                  datasetIdKey='id'
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Animals'
                      }
                    }
                  }}
                  data={{
                    labels: AnimalStore.chartLabels,
                    datasets: [
                      {
                        id: 1,
                        label: 'Profit',
                        data: AnimalStore.chartProfit,
                        borderColor: '#78AF6A',
                        backgroundColor: '#78AF6A'
                      },
                      {
                        id: 2,
                        label: 'Cost',
                        data: AnimalStore.chartCost,
                        backgroundColor: '#e26060',
                        borderColor: '#e26060'
                      },
                    ],
                  }}
                />   
              }
            </div>  
            <div className="chart">
              { FieldStore.Fields.length <= 1 ? <p id="msg">No fields to show.</p> : 
                <Bar
                  datasetIdKey='id'
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Field Size'
                      }
                    }
                  }}
                  data={{
                    labels: FieldStore.chartLabels,
                    datasets: [
                      {
                        id: 1,
                        label: 'km2/ha/a',
                        data: FieldStore.chartSize,
                        backgroundColor: '#2c71a8',
                        borderColor: '#2c71a8'
                      },
                    ],
                  }}
                />   
              }
            </div>  
          </div>
          
        </div>
      </div>
    </div>
  )
})

export default Homepage