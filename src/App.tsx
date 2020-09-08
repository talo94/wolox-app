import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import ErrorBoundary from 'components/ErrorBoundary'
import Route from './components/Route'
import Loading from 'components/Loading'

const Login = lazy(() => import('pages/Login'))
const Home = lazy(() => import('pages/Home'))
const Technologies = lazy(() => import('pages/Technologies'))

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
)

export default App
