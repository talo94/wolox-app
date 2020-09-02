import { service, updateHeaders } from './service'

export const login = (payload: any) =>
  service.post(`/login`, payload).then(({ data }) => {
    const { token } = data
    updateHeaders({
      Authorization: `Bearer ${token}`,
    })
    return { token }
  })
