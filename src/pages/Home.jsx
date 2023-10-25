import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import Slide from '../Components/Slide'


import Card from '../Components/Card'
import { Quizdata } from '../App'
export default function Home() {
        const questionSet = useContext(Quizdata)
  return (
    <div>
        <Navbar/>
        <Slide/>
        <h2 className='text-white text-4xl'> Top Quizzz </h2>
        <div className='px-10 mt-10 flex flex-wrap gap-6'>
            {
                questionSet.map(v=>{
                        return <Card key={v.id} data ={ v  } />
                })
            }
        </div>
        
    </div>
  )
}
