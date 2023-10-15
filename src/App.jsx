import { useState } from 'react'

import './App.css'
// import "node_modules\bootstrap-icons\font\bootstrap-icons.css"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"


import LabelBottomNavigation from './Components/MainNav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Movies from './Components/Movies/Movies'
import Series from './Components/Series/Series'
import Search from './Components/Search/Search'
import Trendings from './Components/Trending/Trendings'
import Header from './Components/Header/Header'




function App() {
console.log("App routed");

  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' Component={Trendings} exact />
          <Route path='/movies' Component={Movies} />
          <Route path='/series' Component={Series} />
          <Route path='/search' Component={Search} />

        </Routes>
      </Container>
      <LabelBottomNavigation />

    </BrowserRouter>
  )
}

export default App
