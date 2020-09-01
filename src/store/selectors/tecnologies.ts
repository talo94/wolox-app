import { createSelector } from 'reselect'
import { Store } from '../modules'

const tecnologiesSelect = (store: Store) => store.tecnologies

export const selectTecnologies = createSelector(
  tecnologiesSelect,
  (tecnologies) => tecnologies.result
)
