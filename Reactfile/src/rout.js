import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Contact from './contact'
const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <Routes>
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default Rout