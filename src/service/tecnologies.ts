import { service } from './service'

export interface TecnologyData {
  tech: string | null
  year: string | null
  author: string | null
  license: string | null
  language: string | null
  type: string | null
  logo: string | null
}

export const getTech = () =>
  service.get(`/techs`).then(({ data }) => {
    return data
  })
