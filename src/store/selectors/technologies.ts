import { createSelector } from 'reselect'
import { Store } from '../modules'

const technologiesSelect = (store: Store) => store.technologies
export type SortType = 'ASC' | 'DESC' | null

export const selectTechnologies = createSelector(
  technologiesSelect,
  (technologies) => technologies.result
)
export const filterTechnologies = (filter: string, sort: SortType) =>
  createSelector(selectTechnologies, (technologies) => {
    return technologies
      .filter(({ tech, type }) => {
        const filterLow = filter.toLowerCase()
        return (
          tech.toLowerCase().includes(filterLow) ||
          type.toLowerCase().includes(filterLow)
        )
      })
      .sort(({ tech: techA }, { tech: techB }) => {
        const techAUpper = techA.toLocaleUpperCase()
        const techBUpper = techB.toLocaleUpperCase()
        switch (sort) {
          case 'ASC':
            return techAUpper < techBUpper ? -1 : 1
          case 'DESC':
            return techAUpper > techBUpper ? -1 : 1
          default:
            return 0
        }
      })
  })
