import React from 'react'
import Nav from './nav'
import Rout from './rout'
import Footer from './footer'
import OrderHistory from './OrderHistory'
import {BrowserRouter} from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Rout/>
      <OrderHistory/>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;

