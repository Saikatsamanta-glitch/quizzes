import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { questionSet } from '../data';
export default function Quiz() {
        const [course, setCourse] = useState({});
        const [counter,setCounter] =useState(0);
        const { quizId } = useParams();
        const [show,setShow] = useState(false);
        const [correct,setCorrect] =useState('');
        useEffect(() => {
                const data = questionSet.filter(v => {
                        if (v.id === quizId)
                                return v
                })
                setCourse(data);
                
        }, [])
        const nextQues = () =>{
                setShow(false)
                if(counter+1 < course[0]?.quizQuestion.length){
                        setCounter(counter+1)
                }
        }
        const ans = (v) =>{
                setShow(true)
                
                if(v === course[0]?.quizQuestion[counter]?.correct[0]){
                        setCorrect(v) 
                }
                
        }
console.log(course[0]?.quizQuestion[0]?.question);

        return (
                <div className='h-screen w-screen flex items-center justify-center'>
                        <div className='relative h-[90%] w-[90%] bg-white rounded-xl md:p-20 p-8 flex flex-col  justify-between'>
                                <h1 className='md:text-5xl text-xl text-center'> Question: { course[0]?.quizQuestion[counter]?.question} </h1>
                                
                                <div className='flex justify-center md:flex-row flex-col'>
                                        {
                                                course[0]?.quizQuestion[counter]?.answer.map(v=>{
                                                        return <div  className={` ${show&&v==course[0]?.quizQuestion[counter]?.correct[0]?'bg-green-300': show? 'bg-red-300':'bg-cyan-300' } hover:animate-animation-thump md:h-44 md:w-80 h-14  bg-cyan-300 m-6 rounded-2xl flex text-center items-center justify-center text-3xl cursor-pointer`} onClick={()=>{ans(v)}} > {v} </div>
                                                })
                                        }
                                </div>
                                { show && <button className='absolute bottom-5 right-5 text-3xl rounded-lg bg-cyan-300 h-16 w-32 ml-auto'onClick={nextQues}  >Next</button>  } 
                               
                        </div>
                </div>
        )
}
