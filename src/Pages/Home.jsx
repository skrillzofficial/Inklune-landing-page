import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Explore from '../Components/Explore'
import Community from '../Components/Community'
import Voice from '../Components/Voice'
import Inspired from '../Components/Inspired'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Featured/>
        <Explore/>
        <Community/>
        <Voice/>
        <Inspired/>
        <Footer/>
    </div>
  )
}

export default Home