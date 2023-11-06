import { useState } from 'react'
// import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { BrowserRouter, Route , Routes } from 'react-router-dom'


function App() {

  return (
    <>

<BrowserRouter>

<Header/>


<Routes>

  <Route path='/login' element = {<Login/>} > </Route>
  <Route path='/register' element = {<Register/>} > </Route>

        {/* <Register/> */}
        {/* // <Login/> */}

</Routes>




  <Footer/>


</BrowserRouter>


    </>
  )
}

export default App
