import React from 'react'
import { AuthLayout, DefaultLayout, PrivateRoute } from './components/common'
import { Route, Switch, BrowserRouter, RouteComponentProps } from 'react-router-dom'
import { Cursor } from './components/ui'

const App: React.FC = () => {
  return (
    <div className="app">
      <Cursor />
      <BrowserRouter>
        <Switch>
          <Route path="/auth" render={(_props: RouteComponentProps) => <AuthLayout />} />
          <PrivateRoute path="/" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
