import React, {
  useEffect,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useTranslation } from 'react-i18next'

import no from 'assets/exchange.svg'
import desc from 'assets/download.svg'
import asc from 'assets/up-arrow.svg'
import { request } from 'store/modules/technologies'
import { filterTechnologies, SortType } from 'store/selectors'
import TechnologyItem from 'components/TechnologyItem'
import { TechnologyData } from 'service/technologies'
import styles from './Technologies.module.scss'
import Header from 'components/Header'

const Technologies = () => {
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState<SortType>(null)
  const { t } = useTranslation()

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
      <Header />
      <h1 className={styles.title}>{t('app tech title')}</h1>
      <div className={styles.filters}>
        <input onChange={onChange} value={filter} className={styles.input} />
        <button onClick={onSort} type="button" className={styles.sortButton}>
          {!sort ? (
            <img src={asc} className={styles.icon} alt={'asc filter'} />
          ) : sort === 'ASC' ? (
            <img src={desc} className={styles.icon} alt={'desc filter'} />
          ) : (
            <img src={no} className={styles.icon} alt={'no filter'} />
          )}
        </button>
      </div>
      <div className={styles.technologiesContainer}>
        {technologies.map((technology: TechnologyData) => (
          <TechnologyItem data={technology} />
        ))}
      </div>
    </div>
  )
}

export default Technologies
