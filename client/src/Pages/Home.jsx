import React from 'react'
import Hero from '../Components/Hero'
import Carcard from '../Components/Carcard'
import FeaturedSection from '../Components/FeaturedSection'

const Home = () => {
  return (
    <>
    {/* mount all the components to show in Home page */}
      <Hero />
      {/* <Carcard /> */}
      <FeaturedSection />
    </>
  )
}

export default Home
