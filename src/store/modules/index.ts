import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import auth, { authSaga, AuthStore } from './auth'

export interface Store {
  auth: AuthStore
}

export const rootReducer = combineReducers<Store>({
  auth,
})

export function* rootSaga() {
  yield all([authSaga()])
}
