import { createTransform } from 'redux-persist'
import { updateHeaders } from 'service/service'

const configureServiceTransform = (reducerName: string) => {
  function inbound(state: any) {
    return state
  }

  function outbound(state: any) {
    if (!state) {
      return state
    }

    updateHeaders({
      Authorization: `Bearer ${state.token}`,
    })

    return state
  }

  return createTransform(inbound, outbound, { whitelist: [reducerName] })
}
export default configureServiceTransform
