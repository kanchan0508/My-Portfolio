import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas} from "./components"
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';


function App() {
  const router = [
    {
      path: '/',
      component: <App />,
    },
    {
      path: '/about',
      component: <About />,
    },
    {
      path: '/work',
      component: <Works />,
    },
    {
      path: '/contact',
      component: <Contact />,
    }
  ];
  return (
    <BrowserRouter router={router}>
  <div className='relative z-0 bg-primary '>
    <CustomCursor />
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <div className='relative'>
    <Tech />
    <Works />
    <StarsCanvas />
    </div>
    <Feedbacks />
    <div className='relative'>
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
 
  </div>
  </BrowserRouter>
  )
}

export default App
