import { observer } from 'mobx-react'
import React from 'react'
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2'

Chart.register(...registerables);

const LineChart = observer(({ store }) => {
  return (
    <>
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
                labels: store.chartLabels,
                datasets: [
                    {
                        id: 1,
                        label: 'Profit',
                        data: store.chartProfit,
                        borderColor: '#78AF6A',
                        backgroundColor: '#78AF6A'
                    },
                    {
                        id: 2,
                        label: 'Cost',
                        data: store.chartCost,
                        backgroundColor: '#e26060',
                        borderColor: '#e26060'
                    },
                ],
            }}
        />
    </>
  )
})

export default LineChart