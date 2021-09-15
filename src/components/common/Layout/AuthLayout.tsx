import React from 'react'
import styles from './layout.module.css'
import { renderRoutes } from '../../../lib'
import { auth_routes } from '../../../config'
import { useAppSelector } from '../../../store/hooks'
import { Switch, useHistory } from 'react-router-dom'

const AuthLayout: React.FC = () => {
  const router = useHistory()
  const is_logged = useAppSelector((state) => state.auth.logged_in)

  React.useEffect(() => {
    if (is_logged !== null || is_logged) return router.push('/')
  }, [is_logged, router])

  return (
    <div className={styles.authLayout}>
      <Switch>{renderRoutes(auth_routes)}</Switch>
    </div>
  )
}

export default AuthLayout
