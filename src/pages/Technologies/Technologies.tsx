import React, {
  useEffect,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { request } from 'store/modules/technologies'
import { filterTechnologies, SortType } from 'store/selectors'

const Technologies = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState<SortType>(null)

  useEffect(() => {
    dispatch(request())
  }, [dispatch])

  const technologies = useSelector(
    filterTechnologies(filter, sort),
    shallowEqual
  )

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setFilter(target.value)
  }
  const onSort: MouseEventHandler = () => {
    setSort(!sort ? 'ASC' : sort === 'ASC' ? 'DESC' : null)
  }

  return (
    <div>
      Technologies
      <input onChange={onChange} value={filter} />
      <button onClick={onSort} type="button">
        {sort || 'NO'}
      </button>
      {technologies.map((tech) => (
        <pre>{JSON.stringify(tech, null, 2)}</pre>
      ))}
    </div>
  )
}

export default Technologies
