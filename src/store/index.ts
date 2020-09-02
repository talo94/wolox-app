import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { rootReducer, rootSaga } from './modules'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export default () => {
  const store = createStore(rootReducer, enhancer)
  sagaMiddleware.run(rootSaga)
  return { store }
}
