import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Head from './Head'
import Signin from './Signin'
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Head/>}/>
      <Route path="/signin" element={<Signin/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
