import { createAction, handleActions, Action } from 'redux-actions'
import { takeLatest, call, put } from 'redux-saga/effects'

import { TECNOLOGIES_API } from 'service'
import { TecnologyData } from 'service/tecnologies'

export interface TecnologiesStore {
  loading: boolean
  result: TecnologyData[]
  error?: any
}

export const defaultState: TecnologiesStore = {
  loading: false,
  result: [],
  error: null,
}

//actions
export const request = createAction('REQUEST_TECNOLOGIES')
const load = createAction('LOAD_TECNOLOGIES')
const error = createAction('ERROR_TECNOLOGIES')

//reducer
export default handleActions(
  {
    [`${request}`]: (state: TecnologiesStore) => ({
      ...state,
    }),
    [`${load}`]: (
      state: TecnologiesStore,
      action: Action<TecnologyData[]>
    ) => ({
      ...state,
      result: action.payload,
    }),
    [`${error}`]: (
      state: TecnologiesStore,
      action: ReturnType<typeof error>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
  defaultState
)
// Saga and Side Effects
function* apiRequest() {
  try {
    const response = yield call(TECNOLOGIES_API.getTech)
    yield put(load(response))
  } catch (err) {
    yield put(error({ error: err.response.data.message }))
  }
}

export function* tecnologiesSaga() {
  yield takeLatest(`${request}`, apiRequest)
}
