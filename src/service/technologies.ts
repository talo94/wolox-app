import { service } from './service'

export interface TechnologyData {
  tech: string
  year: string
  author: string
  license: string
  language: string
  type: string
  logo: string
}

export const getTech = () =>
  service.get(`/techs`).then(({ data }) => {
    return data
  })
