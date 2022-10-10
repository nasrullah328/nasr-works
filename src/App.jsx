import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './assets/Components/Navbar'
import Home from './assets/Components/Home'
import Shop from './assets/Components/Shop'
import Contact from './assets/Components/Contact'
import About from './assets/Components/About'
import Footer from './assets/Components/Footer'
import Login from './assets/Components/Login'
import Signup from './assets/Components/Signup'
import Cards from './assets/Components/Cards'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cards" element={<Cards />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App
