import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Home() {
  return (
    <div>
      <h1>Redux Tool-Kit Examples  </h1>
      <Link to={"/counter"}><button className='button' >Counter App</button></Link>
      <Link to={"/todo"}><button className='button' >Todo App</button></Link>
      <Link to={"/addcard"}><button className='button' >Add Card App</button></Link>
    </div>
  )
}
