import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      HOME
      <Link to={'/technologies'}>TECH</Link>
    </div>
  )
}

export default Home
