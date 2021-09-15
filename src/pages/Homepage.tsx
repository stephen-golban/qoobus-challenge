import React from 'react'
import { motion } from 'framer-motion'
import styles from './homepage.module.css'
import { ColumnChart, LineChart } from '../components/common'

const Homepage: React.FC = () => {
  const chartArr = [
    { component: ColumnChart, title: 'Ant Design Chart' },
    { component: LineChart, title: 'React Chartjs 2 Chart (Using a dummy api)' },
  ]
  return (
    <div className={styles.homepage}>
      <div className={styles.chartWrapper}>
        {chartArr.map((chart, i) => (
          <motion.div
            key={i}
            className={styles.chartBox}
            whileHover={{ y: -30, transition: { duration: 0.5 } }}
            whileTap={{ scale: 2, transition: { duration: 0.5 } }}
          >
            <div className={styles.chartTitle}>{chart.title}</div>
            <chart.component />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Homepage
