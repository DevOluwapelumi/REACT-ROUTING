import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const Navigate = useNavigate()
    const register = () => {
        // alert("I wanna go")
        Navigate('/signin')
    }
    return (
        <>
            <button onClick={register}>Go</button>
            Signup
            </>
  )
}

export default Signup