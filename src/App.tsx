import React from 'react';
import './App.css';
// rafce https://animista.net/   https://angrytools.com/
import { Footer, Header, Blog, Possibility, Features, WhatCU } from './containers';
import {  Brand, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatCU/>
        <Features/>
        <Possibility/>
        {/* <CTA/> */}
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App