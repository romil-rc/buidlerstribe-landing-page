import React from 'react'
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

function HomePage() {
  return (
    <div className='pt-3 space-y-5'>
        <Navbar />
        <Home />
        <Footer />
    </div>
  )
}

export default HomePage;