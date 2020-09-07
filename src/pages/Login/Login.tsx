import React from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { login } from 'store/modules/auth'
import styles from './Login.module.scss'
import logo from 'assets/logo_full_color.svg'

const defaultValues = {
  email: '',
  password: '',
  inSession: false,
}
type FormValues = typeof defaultValues

const Login = () => {
  const { handleSubmit, register, errors } = useForm<FormValues>()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const onSubmit = (values: FormValues) => {
    dispatch(login(values))
  }

  const emailrequerido = t('app login error emailrequerido')
  const message = t('app login error message')
  const contraseñarequerida = t('app login error emailrequerido')
  return (
    <div className={styles.mainContainer}>
      <Link to={'/'} className={styles.logo}>
        <img src={logo} alt="Wolox Logo" className={styles.imglogo} />
      </Link>
      <h1>{t('app login title')}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.blueText}>{t('app login email')}</label>

        <input
          type="text"
          name="email"
          className={styles.input}
          ref={register({
            required: emailrequerido,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: message,
            },
          })}
        />
        {errors.email && errors.email.message}

        <label className={styles.blueText}>{t('app login password')}</label>
        <input
          type="password"
          name="password"
          className={styles.input}
          ref={register({
            required: contraseñarequerida,
          })}
        />
        {errors.password && errors.password.message}

        <label className={styles.sesion}>
          {t('app login session')}

          <input
            name="inSession"
            type="checkbox"
            ref={register}
            className={styles.checkbox}
          />
        </label>

        <button type="submit" className={styles.loginButton}>
          {t('app login button')}
        </button>
      </form>
    </div>
  )
}

export default Login
