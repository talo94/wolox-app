import { createAction, handleActions, Action } from 'redux-actions'
import { takeLatest, call, put } from 'redux-saga/effects'

import { AUTH_API } from 'service'

export interface LoginFormValues {
  email: string
  password: string | null
}

interface AuthResponse {
  token: string | null
}

export interface AuthStore extends AuthResponse {
  isSubmitting: boolean
  error: string | null
}

export const defaultState: AuthStore = {
  isSubmitting: false,
  error: null,
  token: null,
}

// Actions
export const login = createAction('auth/LOGIN')
export const logout = createAction('auth/LOGOUT')
const load = createAction('auth/LOAD')
const error = createAction('auth/ERROR')

// Reducer
export default handleActions(
  {
    [`${login}`]: (state: AuthStore) => ({
      ...state,
      isSubmitting: true,
    }),
    [`${load}`]: (state: AuthStore, action: Action<AuthResponse>) => ({
      ...state,
      isSubmitting: false,
      ...action.payload,
    }),
    [`${error}`]: (state: AuthStore, action: Action<any>) => ({
      ...state,
      isSubmitting: false,
      ...action.payload,
    }),
    [`${logout}`]: () => defaultState,
  },
  defaultState
)

// Saga and Side Effects
function* authLogin(action: Action<LoginFormValues>) {
  try {
    const response = yield call(AUTH_API.login, action.payload)
    yield put(load(response))
  } catch (err) {
    yield put(error({ error: err.response.data.message }))
  }
}

export function* authSaga() {
  yield takeLatest(`${login}`, authLogin)
}
