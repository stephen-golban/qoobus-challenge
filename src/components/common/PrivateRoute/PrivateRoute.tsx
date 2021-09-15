import React from 'react'
import { useAppSelector } from '../../../store/hooks'
import { Route, useHistory } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const router = useHistory()
  const is_logged = useAppSelector((state) => state.auth.logged_in)

  React.useEffect(() => {
    if (is_logged === null || !is_logged) return router.push('/auth/login')
  }, [is_logged, router])

  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />
      }}
    />
  )
}

export default PrivateRoute
