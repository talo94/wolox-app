import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import auth, { authSaga, AuthStore } from './auth'
import technologies, {
  technologiesSaga,
  TechnologiesStore,
} from './technologies'
export interface Store {
  auth: AuthStore
  technologies: TechnologiesStore
}

export const rootReducer = combineReducers<Store>({
  auth,
  technologies,
})

export function* rootSaga() {
  yield all([authSaga(), technologiesSaga()])
}
