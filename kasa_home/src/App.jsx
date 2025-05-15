import { Header } from "./components/Header.jsx"
import { Footer } from './components/Footer.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Homepage } from './pages/homepage.jsx';
import Logement  from './pages/logement.jsx'
import  About  from './pages/about.jsx';
import { Error } from './pages/error.jsx';
import { Routes, Route } from 'react-router-dom';



const App = () => {

  return (  
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
