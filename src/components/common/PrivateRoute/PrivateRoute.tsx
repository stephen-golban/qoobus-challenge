import { Loader } from '../../ui'
import { Redirect, Route } from 'react-router-dom'
import { useAppSelector } from '../../../store/hooks'

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const is_logged = useAppSelector((state) => state.auth.logged_in)

  return (
    <Route
      exact
      {...rest}
      render={(props) => {
        return is_logged === null || !is_logged ? (
          <>
            <Loader />
            <Redirect to="/auth/login" />
          </>
        ) : (
          <Component {...props} />
        )
      }}
    />
  )
}

export default PrivateRoute
