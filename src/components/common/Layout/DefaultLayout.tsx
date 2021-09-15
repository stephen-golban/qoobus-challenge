import React from 'react'
import { Navbar } from '../index'
import { Loader } from '../../ui'
import styles from './layout.module.css'
import { renderRoutes } from '../../../lib'
import { default_routes } from '../../../config'
import { Switch, useHistory } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks'

const DefaultLayout: React.FC = () => {
  const router = useHistory()
  const is_logged = useAppSelector((state) => state.auth.logged_in)

  React.useEffect(() => {
    if (is_logged === null || !is_logged) return router.push('/auth/login')
  }, [is_logged, router])

  return (
    <div className={styles.defaultLayout}>
      <Loader />
      <Navbar />
      <Switch>{renderRoutes(default_routes)}</Switch>
    </div>
  )
}

export default DefaultLayout
