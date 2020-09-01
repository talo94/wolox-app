import React, { FC, ComponentType } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { Route as ReactRouter, Redirect, RouteProps } from 'react-router-dom'

import { selectToken } from 'store/selectors'

interface Route extends RouteProps {
  component: ComponentType<any>
  forceRedirect?: boolean
  redirectTo?: string
  isPrivate?: boolean
}

const Route: FC<Route> = ({
  component: Component,
  forceRedirect,
  redirectTo,
  isPrivate = true,
  ...props
}) => {
  const token = useSelector(selectToken, shallowEqual)

  if (forceRedirect && token) {
    return <Redirect to={redirectTo || '/home'} />
  }
  if (!token && isPrivate) {
    return <Redirect to="/" />
  }

  return (
    <ReactRouter
      {...props}
      render={(matchProps) => <Component {...matchProps} />}
    />
  )
}

export default Route
