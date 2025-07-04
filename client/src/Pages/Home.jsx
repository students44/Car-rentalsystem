import React from 'react'
import Hero from '../Components/Hero'
import Carcard from '../Components/Carcard'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
    {/* mount all the components to show in Home page */}
      <Hero />
      {/* <Carcard /> */}
      <FeaturedSection />
      <Banner />
      <Testimonial />
      <Newsletter />
       <Footer />
    </>
  )
}

export default Home
