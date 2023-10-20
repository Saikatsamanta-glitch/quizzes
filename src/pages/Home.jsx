import React from 'react'
import Navbar from '../Components/Navbar'
import Slide from '../Components/Slide'
import { questionSet } from '../data'

import Card from '../Components/Card'
export default function Home() {
        
  return (
    <div>
        <Navbar/>
        <Slide/>
        <h2 className='text-white text-4xl'> Top Quizzz </h2>
        <div className='px-10 mt-10 flex flex-wrap gap-6'>
            {
                questionSet.map(v=>{
                        return <Card data ={ v  } />
                })
            }
        </div>
        
    </div>
  )
}
