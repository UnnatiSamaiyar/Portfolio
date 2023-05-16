import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ContactData from '../components/ContactData'
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat..."/>
      <ContactData />
      <Footer />
    </div>
  )
}

export default Contact