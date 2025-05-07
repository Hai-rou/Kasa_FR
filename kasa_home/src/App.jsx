import React from 'react'
import { Header } from "./components/header.jsx"
import { Footer } from './components/footer.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/homepage.jsx';
import Logement  from './pages/logement.jsx'
import { Error } from './pages/error.jsx';
import { Routes, Route } from 'react-router-dom';



const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Logements/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
