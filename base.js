import React from 'react'
import { Link } from 'react-router-dom'
export default function Base() {
  return (
    <div className="navbar">
    
    <nav className='ls'>
    <Link to="/home"><h2 style={{marginLeft:10}}>Log In</h2></Link>
    <Link to="/about"><h2 style={{marginLeft:10}}>Sign In</h2></Link>
    </nav>
    </div>
  )
}