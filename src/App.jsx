
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'


const App = () => {
  const [playState,setPlayState]=useState(false);

  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our Features
          ' title='What YoungCent Offers'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
         <Title subTitle='Get a visual walkthrough of how the expense tracker works – intuitive, secure, and insightful.' title='One-Stop Glimpse Into Our Tracker'/>
         <Campus/>
          <Title subTitle='Testimonials' title='Let`s hear what our user has to say'/>
          <Testimonial/>
           <Title subTitle='Contatc us' title='Get in touch'/>
           <Contact/>
           <Footer/>
          
        </div>
        <Video playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App