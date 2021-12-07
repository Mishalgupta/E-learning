import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer";
import Header from "./Header";
import About from './About'
import HowItWorks from "./HowItWorks";
const Homepage = () => {
    return (<>
        <Navbar />
        <Header />
        <HowItWorks />
        <About />
        <Footer />
    </>
    )
}

export default Homepage