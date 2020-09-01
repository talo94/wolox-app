import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import createFilter from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'

import { rootReducer, rootSaga } from './modules'
import configurePrivateService from './configureServiceTransform'

const storeKey = 'LoggedUser'
const reducerKey = 'auth'

const authFilterKeys = createFilter(reducerKey, ['token'])
const persistConfig = {
  key: storeKey,
  storage,
  whitelist: [reducerKey],
  transforms: [authFilterKeys, configurePrivateService(reducerKey)],
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export default () => {
  const store = createStore(persistedReducer, enhancer)
  let persistor = persistStore(store)
  sagaMiddleware.run(rootSaga)
  return { store, persistor }
}
