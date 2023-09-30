import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Jumpbo from './Jumpbo'
import './App.css'
import Navbar from './Navbar'
import Head from './Head'
import Signin from './Signin'
import Register from './Register'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Jumpbo/>
   <Routes>
      <Route path="/" element={<Head/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/register" element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
