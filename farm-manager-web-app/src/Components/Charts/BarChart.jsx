import { observer } from 'mobx-react'
import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'

Chart.register(...registerables);

const BarChart = observer(({ store }) => {
  return (
    <>
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
            labels: store.chartLabels,
            datasets: [
                {
                id: 1,
                label: 'km2/ha/a',
                data: store.chartSize,
                backgroundColor: '#2c71a8',
                borderColor: '#2c71a8'
                },
            ],
            }}
        />   
    </>
  )
})

export default BarChart