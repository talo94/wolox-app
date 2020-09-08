import React, { Component } from 'react'

import styles from './ErrorBoundary.module.scss'
import warning from 'assets/warning.svg'
interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<{}, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryState) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: !!error }
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log('componentDidCatch', error, errorInfo)
  }
  render(): any {
    if (this.state.hasError) {
      return (
        <div className={styles.main}>
          <div className={styles.container}>
            <img src={warning} className={styles.icon} alt={'warning icon'} />
            <p className={styles.blueTextBold}>{'Error'}</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
