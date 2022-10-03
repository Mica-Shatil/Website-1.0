import React from 'react'

import  { Navbar } from './components';
import  { Projects, Experience, About, Header, Contact } from './containers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Experience />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App