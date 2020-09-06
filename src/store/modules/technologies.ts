import { createAction, handleActions, Action } from 'redux-actions'
import { takeLatest, call, put } from 'redux-saga/effects'

import { TECHNOLOGIES_API } from 'service'
import { TechnologyData } from 'service/technologies'

export interface TechnologiesStore {
  loading: boolean
  result: TechnologyData[]
  error?: any
}

export const defaultState: TechnologiesStore = {
  loading: false,
  result: [],
  error: null,
}

//actions
export const request = createAction('REQUEST_TECHNOLOGIES')
const load = createAction('LOAD_TECHNOLOGIES')
const error = createAction('ERROR_TECHNOLOGIES')

//reducer
export default handleActions(
  {
    [`${request}`]: (state: TechnologiesStore) => ({
      ...state,
    }),
    [`${load}`]: (
      state: TechnologiesStore,
      action: Action<TechnologyData[]>
    ) => ({
      ...state,
      result: action.payload,
    }),
    [`${error}`]: (
      state: TechnologiesStore,
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
    const response = yield call(TECHNOLOGIES_API.getTech)
    yield put(load(response))
  } catch (err) {
    yield put(error({ error: err.response.data.message }))
  }
}

export function* technologiesSaga() {
  yield takeLatest(`${request}`, apiRequest)
}
