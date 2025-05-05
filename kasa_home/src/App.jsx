import React from 'react'

import { Header } from "./components/header.jsx"
import { Footer } from './components/footer.jsx'
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
