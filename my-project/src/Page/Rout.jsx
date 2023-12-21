import React from 'react'
import {Routes, Route } from "react-router-dom";
import Home from './Home';
import Footer from '../components/Footer';
import LogIn from './LogIn';
import HomeUser from './HomeUser';
import SingUp from './SingUp';
function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/LogIn' element={<LogIn/>}/>
            <Route path='/HomeUser/:id' element={<HomeUser/>}/>
            <Route path='/SingUp' element={<SingUp/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Rout