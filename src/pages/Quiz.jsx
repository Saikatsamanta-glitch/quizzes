import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { questionSet } from '../data';
export default function Quiz() {
        const [course, setCourse] = useState({});
        const [counter,setCounter] =useState(0);
        const { quizId } = useParams();
        const [show,setShow] = useState(false);
        const [correct,setCorrect] =useState(false);
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
                        <div className='h-[90%] w-[90%] bg-white rounded-xl p-20 flex flex-col justify-between'>
                                <h1 className='text-5xl text-center'> Question: { course[0]?.quizQuestion[counter]?.question} </h1>
                                
                                <div className='flex justify-center'>
                                        {
                                                course[0]?.quizQuestion[counter]?.answer.map(v=>{
                                                        return <div  className={` hover:animate-animation-thump h-44 w-80 bg-cyan-300 m-6 rounded-2xl flex items-center justify-center text-3xl cursor-pointer`} onClick={()=>{ans(v)}} > {v} </div>
                                                })
                                        }
                                </div>
                                { show && <button className='text-3xl rounded-lg bg-cyan-300 h-16 w-32 ml-auto'onClick={nextQues}  >Next</button>  } 
                               
                        </div>
                </div>
        )
}
