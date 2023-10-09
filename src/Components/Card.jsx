import React from 'react'
import { Link } from 'react-router-dom'
export default function Card({ data }) {
    return (
        <Link to={`/quiz/${data.id}`}>
            <div className='h-72 w-96 rounded-lg border-2 border-white p-5'>
                <img src={data.img} className='w-full' alt="" />
                <h1 className='text-2xl text-white text-center'> {data.title}  </h1>
            </div>
        </Link>

    )
}
