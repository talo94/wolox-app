import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import auth, { authSaga, AuthStore } from './auth'
import tecnologies, { tecnologiesSaga, TecnologiesStore } from './tecnologies'
export interface Store {
  auth: AuthStore
  tecnologies: TecnologiesStore
}

export const rootReducer = combineReducers<Store>({
  auth,
  tecnologies,
})

export function* rootSaga() {
  yield all([authSaga(), tecnologiesSaga()])
}
