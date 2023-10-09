import React from 'react'
import { useParams } from 'react-router-dom'
export default function Quiz() {
    const {quizId} = useParams();
    
  return (
    <div className='text-white'>Quiz: {quizId}</div>
  )
}
