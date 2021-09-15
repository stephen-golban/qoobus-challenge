import React from 'react'
import { Loader } from '../../ui'
import { TWAuthLayout } from './tw-styled'
import { renderRoutes } from '../../../lib'
import { auth_routes } from '../../../config'
import { useAppSelector } from '../../../store/hooks'
import { match, Switch, Redirect } from 'react-router-dom'

interface IProps {
  history: any
  location: any
  match: match<{}>
  staticContext?: any
}

const AuthLayout: React.FC<IProps> = () => {
  const is_logged = useAppSelector((state) => state.auth.logged_in)

  return (
    <>
      {is_logged ? (
        <Loader />
      ) : (
        <TWAuthLayout>
          <Switch>{renderRoutes(auth_routes)}</Switch>
        </TWAuthLayout>
      )}
      {is_logged && <Redirect to="/" />}
    </>
  )
}

export default AuthLayout
