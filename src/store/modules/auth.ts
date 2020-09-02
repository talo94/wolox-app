import { createAction, handleActions, Action } from 'redux-actions'
import { takeLatest, call, put } from 'redux-saga/effects'

import { AUTH_API } from 'service'

export interface LoginFormValues {
  email: string
  password: string | null
  inSession: boolean
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
  token: localStorage.getItem('token') ?? null,
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
    [`${load}`]: (state: AuthStore, action: Action<any>) => ({
      ...state,
      isSubmitting: false,
      token: action.payload,
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
    const { inSession, ...values } = action.payload
    const { token } = yield call(AUTH_API.login, values)

    if (inSession) {
      localStorage.setItem('token', token)
    }

    yield put(load(token))
  } catch (err) {
    yield put(error({ error: err.response.data.message }))
  }
}

export function* authSaga() {
  yield takeLatest(`${login}`, authLogin)
}
