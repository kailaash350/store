import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Store from './pages/Store'
import About from './pages/About'
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/shoppingCartContext'


function App() {
  return (
    <ShoppingCartProvider>
    <Navbar/>
     <Container className='mb-4'>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Store/>}/>
      </Routes>
     </Container>
    </ShoppingCartProvider>
    
  )
}

export default App
