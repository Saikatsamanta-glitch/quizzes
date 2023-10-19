import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { questionSet } from '../data';
import wrongmp3 from '../wrong.mp3'
import correctmp3 from '../correct.mp3';

export default function Quiz() {
        const [course, setCourse] = useState({});
        const [counter, setCounter] = useState(0);
        const { quizId } = useParams();
        const [show, setShow] = useState(false);
        const [meme,setMeme] =useState(false);
       
        var wrong = new Audio(wrongmp3)
        var correct = new Audio(correctmp3)
        useEffect(() => {
                const data = questionSet.filter(v => {
                        if (v.id === quizId)
                                return v
                })
                setCourse(data);

        }, [])
        const nextQues = () => {
                setMeme(true)
                setTimeout(()=>{
                        setMeme(false)
                },4000)
                setShow(false)
                if (counter + 1 < course[0]?.quizQuestion.length) {
                        setCounter(counter + 1)
                }
        }
        const ans = (v) => {
                setShow(true)

                if (v === course[0]?.quizQuestion[counter]?.correct[0]) {
                        correct.play()
                }else{
                        wrong.play()
                }
        }
        console.log(course[0]?.quizQuestion[0]?.question);
// ${tabColor[3]}
        return (
                <div className='h-screen w-screen flex items-center justify-center'>
                       { meme ? <div className='h-64 w-64'> <img src="https://uploads-ssl.webflow.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png" alt="" /> </div> : <div className='relative h-[90%] w-[90%] bg-white rounded-sm md:p-20 p-8 flex flex-col  justify-between'>
                                <h1 className='md:text-5xl text-xl text-center'> Question: {course[0]?.quizQuestion[counter]?.question} </h1>

                                <div className='flex justify-center md:flex-row flex-col'>
                                        {
                                                course[0]?.quizQuestion[counter]?.answer.map((v,i) => {
                                                        
                                                        return <div className={` ${show && v == course[0]?.quizQuestion[counter]?.correct[0] ? 'bg-green-300' : show ? 'bg-red-300' : `bg-cyan-300` } hover:animate-animation-thump md:h-44 md:w-80 h-14   m-6 rounded-2xl flex text-center items-center justify-center text-3xl cursor-pointer`} onClick={() => { ans(v) }} > {v} </div>
                                                })
                                        }
                                </div>
                                {show && <button className='absolute bottom-5 right-5 text-3xl rounded-lg bg-cyan-300 h-16 w-32 ml-auto' onClick={nextQues}  >Next</button>}

                        </div>
                        }
                </div>
        )
}
