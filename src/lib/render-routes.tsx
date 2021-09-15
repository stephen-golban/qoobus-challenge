import { RouteType } from '../typings'
import { Route } from 'react-router-dom'

export const renderRoutes = (routes: RouteType[]) => {
  return routes.map((route, key: number) => {
    return <Route exact path={route.layout + route.path} component={route.component} key={key} />
  })
}
