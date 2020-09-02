import axios from 'axios'

const { CancelToken } = axios
const source = CancelToken.source()

const baseConfig = {
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  cancelToken: source.token,
}

let instance = axios.create(baseConfig)

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

type Headers = { [key: string]: string | undefined }

export function updateHeaders(headers: Headers) {
  try {
    instance.defaults.headers = {
      ...instance.defaults.headers,
      ...headers,
    }
  } catch (err) {
    console.dir(err)
  }
}

export const service = axios.create(baseConfig)
export default instance
