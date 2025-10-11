import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import About from './components/About'
import Rooms from './components/Rooms'
import Reviews from './components/Reviews'
import Access from './components/Access'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App overflow-x-hidden w-full">
      <Header />
      <Hero />
      <Features />
      <Menu />
      <About />
      <Rooms />
      <Reviews />
      <Access />
      <Footer />
    </div>
  )
}

export default App
