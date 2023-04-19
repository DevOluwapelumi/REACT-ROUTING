import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/home' element={<Navigate to='/' />} />
        <Route path='in' element={<Navigate to='/Signin' />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
        <Route path='user/:name' element={<User/>} />

      </Routes>

      <div className="container-fluid">
        <div className="row">
          <Card
            name="Card One"
            style="bg-danger mx-2 card"
            paragraph="I jkvmvcxvsc vtgj,ynjhgerijgn truhgn n uirerjgnwghduf nhurng jyh5i"
          />
          <Card name="Card Two" style="bg-info mx-2 card" />
          <Card name="Card Three" style="bg-success mx-2 card" />
          <Card name="Card Four" style="bg-primary mx-2 card" />
        </div>
      </div>
    </>
  )
}

export default App
