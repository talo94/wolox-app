import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { request } from 'store/modules/tecnologies'
import { selectTecnologies } from 'store/selectors'

const Tecnologies = () => {
  const dispatch = useDispatch()
  const tecnologies = useSelector(selectTecnologies, shallowEqual)
  useEffect(() => {
    dispatch(request())
  }, [dispatch])

  console.log(tecnologies)
  return <div>Tecnologies</div>
}

export default Tecnologies
