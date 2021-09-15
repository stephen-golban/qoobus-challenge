import React from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
  const [chartData, setChartData] = React.useState({})

  const chart = () => {
    let empSal: number[] = []
    let empAge: number[] = []
    axios
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .then((res) => {
        console.log(res)
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary))
          empAge.push(parseInt(dataObj.employee_age))
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: 'level of thiccness',
              data: empSal,
              backgroundColor: ['dodgerblue'],
              borderWidth: 4,
            },
          ],
        })
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(empSal, empAge)
  }

  React.useEffect(() => {
    chart()
  }, [])

  return (
    <Line
      data={chartData}
      options={{
        responsive: true,
        title: { text: 'THICCNESS SCALE', display: true },
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      }}
    />
  )
}

export default LineChart
