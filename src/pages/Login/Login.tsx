import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'store/modules/auth'
import { useForm } from 'react-hook-form'
import styles from './Login.module.scss'
import { AUTH_API } from 'service'

const defaultValues = {
  email: '',
  password: '',
  inSession: false,
}
type FormValues = typeof defaultValues

const Login = () => {
  const { handleSubmit, register, errors } = useForm<FormValues>()
  const dispatch = useDispatch()

  const onSubmit = (values: FormValues) => {
    dispatch(login(values))
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Correo</label>
        <input
          type="text"
          name="email"
          ref={register({
            required: 'El correo es requerida',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo invalido',
            },
          })}
        />
        {errors.email && errors.email.message}

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: 'La contraseña es requerida',
          })}
        />
        {errors.password && errors.password.message}

        <label>
          Mantener sesión abierta
          <input name="inSession" type="checkbox" ref={register} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login
