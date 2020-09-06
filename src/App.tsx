import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import Login from 'pages/Login'
import Home from 'pages/Home'
import Route from './components/Route'
import Technologies from 'pages/Technologies'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/login"
        component={Login}
        forceRedirect
        redirectTo="/technologies"
        isPrivate={false}
      />
      <Route exact path="/" component={Home} isPrivate={false} />
      <Route exact path={`/technologies`} component={Technologies} />
    </Switch>
  </BrowserRouter>
)

export default App
