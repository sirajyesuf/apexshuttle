import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Fleets from '../components/fleets'
import Footer from '@/components/footer'
import ContactUs from '@/components/contactus'
import AboutUs from '@/components/aboutus'
import Services from '@/components/services'

export default function Landing() {

return (
    <div>
        <Navbar />
        <Hero />
        <Fleets />
        <Services />
        <AboutUs />
        <ContactUs />
        <Footer />
    </div>
)
}
