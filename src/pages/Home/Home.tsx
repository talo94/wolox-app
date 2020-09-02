import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      HOME
      <Link to={'/tecnologies'}>TECH</Link>
    </div>
  )
}

export default Home
