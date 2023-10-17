import React from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Trending from './Trending'
import BestOffers from './BestOffers'

const Main = () => {
  return (
    <div className='main'>
      <NavBar />
      <Hero />
      <Trending />
      <BestOffers />
    </div>
  )
}

export default Main