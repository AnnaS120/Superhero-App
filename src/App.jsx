import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header } from './components';
import './App.css'

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />}/>
          <Route path="/superheros" element={<Pages.SuperherosPage />}/>
          <Route path="/superheros/:id" element={<Pages.SuperheroShowPage />}/>
          <Route path="/game" element={<Pages.GamePage />}/>
          <Route path="*" element={<Pages.NotFoundPage />}/>
        </Route>
      </Routes>
   
   
  )
}


export default App
