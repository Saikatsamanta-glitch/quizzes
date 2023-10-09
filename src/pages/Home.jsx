import React from 'react'
import Navbar from '../Components/Navbar'
import Slide from '../Components/Slide'
import { javascript } from '../data'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Slide/>
        <h2 className='text-white text-4xl'> Top Quizzz </h2>
        
    </div>
  )
}
