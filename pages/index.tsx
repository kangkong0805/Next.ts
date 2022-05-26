import type { NextPage } from 'next'
import { useState } from 'react'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  )
}

export default Home
