import { createSelector } from 'reselect'
import { Store } from '../modules'

const authSelect = (store: Store) => store.auth

export const selectToken = createSelector(authSelect, (auth) => auth.token)
