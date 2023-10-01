import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Jumpbo from './Jumpbo'
import './App.css'
import Navbar from './Navbar'
import Head from './Head'
import Signin from './Signin'
import Register from './Register'
import { UserContextProvider } from './UserContext'
import Account from './account'
import Placepage from './Placepage'
const App = () => {
  return (
    <UserContextProvider>
   <BrowserRouter>
   <Navbar/>
   <Jumpbo/>
   <Routes>
      <Route path="/" element={<Head/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/account" element={<Account/>}/>
      <Route path="/account/places" element={<Placepage/>}/>
   </Routes>
   </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
