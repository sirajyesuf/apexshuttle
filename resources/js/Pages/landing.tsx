import React from 'react'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Fleets from '../components/fleets'
import Footer from '@/components/footer'
import ContactUs from '@/components/contactus'
import AboutUs from '@/components/aboutus'

export default function Landing() {

return (
    <div>
        <Navbar />
        <Hero />
        <Fleets />
        <AboutUs />
        <ContactUs />
        <Footer />
    </div>
)
}
