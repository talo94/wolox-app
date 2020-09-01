import axios from 'axios'

const { CancelToken } = axios
const source = CancelToken.source()

const responseTransform = (data: any, headers: any) => {
  const type = headers['content-type']
  switch (type) {
    case 'application/json; charset=utf-8':
    case 'application/json':
      try {
        return JSON.parse(data)
      } catch (e) {
        /* Ignore */
      }
      break
    case 'text/csv;charset=utf-8':
    case 'text/csv':
      return new Blob(['\ufeff' + data], { type: `text/csv;charset=UTF-8` })
    case 'application/pdf':
    default:
      return data
  }
}

const baseConfig = {
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  cancelToken: source.token,
  transformResponse: [responseTransform],
}

let instance = axios.create(baseConfig)

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
