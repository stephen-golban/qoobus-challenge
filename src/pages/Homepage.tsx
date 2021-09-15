import React from 'react'
import styles from './homepage.module.css'
import { ColumnChart, LineChart } from '../components/common'

const Homepage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.chartWrapper}>
        <div className={styles.chartBox}>
          <div className={styles.chartTitle}>React Chartjs 2 Chart (Using a dummy api)</div>
          <LineChart />
        </div>
        <div className={styles.chartBox}>
          <div className={styles.chartTitle}>Ant Design Chart</div>
          <ColumnChart />
        </div>
      </div>
    </div>
  )
}

export default Homepage
