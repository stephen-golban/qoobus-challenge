import { Homepage } from './pages'
import { AuthLayout, PrivateRoute } from './components/common'
import { Route, Switch, BrowserRouter, RouteComponentProps } from 'react-router-dom'

function App(): JSX.Element {
  return (
    <div className="app w-full h-screen min-h-screen">
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(props: RouteComponentProps) => <AuthLayout {...props} />} />
          <PrivateRoute path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
