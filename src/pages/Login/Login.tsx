import React, { FormEventHandler, useState, ChangeEventHandler } from 'react'
import { useDispatch } from 'react-redux'
import { login } from 'store/modules/auth'

const defaultValues = {
  email: '',
  password: '',
  inSession: false,
}
const Login = () => {
  const [values, setValues] = useState(defaultValues)
  const dispatch = useDispatch()

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault()
    dispatch(login(values))
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValues({
      ...values,
      [target.name]:
        target.type === 'checkbox' ? !target.checked : target.value,
    })
  }

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form
        onSubmit={onSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>Correo</label>
        <input
          value={values.email}
          onChange={onChange}
          type="text"
          name="email"
        />
        <label>Contraseña</label>
        <input
          value={values.password}
          onChange={onChange}
          type="password"
          name="password"
        />
        <label>
          Mantener sesión abierta
          <input
            checked={values.inSession}
            onChange={onChange}
            name="inSession"
            type="checkbox"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login
