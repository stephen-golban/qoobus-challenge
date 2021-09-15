import { motion } from 'framer-motion'
import { useMousePosition } from '../../../lib'
import styles from './cursor.module.css'

const Cursor = () => {
  //get x and y mouse coordinates
  const { x, y } = useMousePosition()
  return (
    <motion.div
      className={styles.cursor}
      animate={{
        x: x! - 16,
        y: y! - 16,
        scale: 1,
        opacity: 0.8,
      }}
      transition={{
        ease: 'linear',
        duration: 0.2,
      }}
    />
  )
}

export default Cursor
