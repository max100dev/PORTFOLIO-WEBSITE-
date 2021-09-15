import React from 'react'
import "./sass/main.scss"
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Work from './Components/Work'
import  Contact  from './Components/Contact'
import Footer from './Components/Footer'
const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Work/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
