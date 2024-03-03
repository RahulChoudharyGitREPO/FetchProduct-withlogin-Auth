
import './App.css'
import Home from './Home'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Product from './Product'
import { AuthContext } from './Auth'
import { useContext } from 'react'

function App() {
  const { isloggedIn } = useContext(AuthContext)
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/Login'>Login</Link>
      <Link to='/product'>Product</Link>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={isloggedIn ? <Navigate to='/Product' /> : <Login />} />
        <Route path='/Product'
          element={isloggedIn ? <Product /> : <Navigate to='/Login' />} />

      </Routes>
    </>
  )
}

export default App
