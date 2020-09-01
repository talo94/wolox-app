import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Login from 'pages/Login'
import Home from 'pages/Home'
import Tecnologies from 'pages/Tecnologies'
import Route from './components/Route'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/login"
        component={Login}
        forceRedirect
        redirectTo="/"
        isPrivate={false}
      />
      <Route exact path="/" component={Home} isPrivate={false} />
      <Route exact path={`/tecnologies`} component={Tecnologies} />
    </Switch>
  </BrowserRouter>
)

export default App
