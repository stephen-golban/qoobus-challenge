import React from 'react'
import styles from './loader.module.css'
import { AnimatePresence, motion } from 'framer-motion'

const blackBox = {
  initial: {
    opacity: 1,
    display: 'flex',
  },
  animate: {
    opacity: 0,
    display: 'none',
    transition: {
      display: {
        delay: 1,
        duration: 0,
      },
      opacity: {
        duration: 1,
      },
      when: 'afterChildren',
      ease: [0.87, 0, 0.13, 1],
    },
  },
}

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
}

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 90,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
}
const Loader: React.FC = (): JSX.Element => {
  return (
    <AnimatePresence>
      <motion.div className={styles.loader} initial="initial" animate="animate" variants={blackBox}>
        <motion.svg className={styles.svgWrapper} variants={textContainer}>
          <motion.pattern
            className={styles.svgPattern}
            width={750}
            height={800}
            id="pattern"
            patternUnits="userSpaceOnUse"
          >
            <motion.rect className={styles.svgRect} />
            <motion.rect variants={text} className={styles.svgTextRect} />
          </motion.pattern>
          <motion.text className={styles.svgText} x="50%" y="50%" textAnchor="middle" style={{ fill: 'url(#pattern)' }}>
            Qoobus.
          </motion.text>
        </motion.svg>
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
