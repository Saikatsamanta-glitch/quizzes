import React, { useContext, useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { Quizdata } from "../App";
import wrongmp3 from "../wrong.mp3";
import correctmp3 from "../correct.mp3";
import axios from "axios";
// 5/8*10
export default function Quiz() {
        const questionSet = useContext(Quizdata);
        const [course, setCourse] = useState({});
        const [counter, setCounter] = useState(0);
        const { quizId } = useParams();
        const [show, setShow] = useState(false);
        const [img,setImg] = useState('')
        const [meme, setMeme] = useState(false);
        const [score, setScore] = useState(0);
        const [correctAns, setcorrectAns] = useState(0);
        const [clicked, setClicked] = useState(false);
        const [showresult, setshowresult] = useState(false)
        var wrong = new Audio(wrongmp3);
        var correct = new Audio(correctmp3);
        useEffect(() => {
                (async function(){
                      const response =  await axios('https://api.imgflip.com/get_memes');
                      setImg(response.data.data.memes)
                      console.log(response.data.data.memes[Math.floor(Math.random()*(99-0))].url);
                })()
                const data = questionSet?.filter((v) => {
                        if (v.id === quizId) return v;
                });
                setCourse(data);
        }, [questionSet]);

        const nextQues = () => {
                if(counter+1 == questionSet.length){
                        setshowresult(true)
                }
                setClicked(false);
                setMeme(true);
                setTimeout(() => {
                        setMeme(false);
                }, 4000);
                setShow(false);
                if (counter + 1 < course[0]?.quizQuestion.length) {
                        setCounter(counter + 1);
                }
        };
        const ans = (v) => {
                if (!clicked) {
                        if (v === course[0]?.quizQuestion[counter]?.correct[0]) {
                                correct.play();
                                setcorrectAns(correctAns + 1);
                                setScore((score + 1) * correctAns * 500);
                        } else {
                                wrong.play();
                                setcorrectAns(0);
                        }
                }
                setShow(true);
                setClicked(true);
        };

        // ${tabColor[3]}
        return (
                <div className="h-screen w-screen flex p-6 gap-y-9 flex-col items-center">
                        <div className="w-screen px-7 flex text-white gap-x-5 h-8">
                                <h2 className=" text-xl">Streaks</h2> 
                                <div className="w-96 h-full border border-white rounded-lg overflow-hidden">
                                         
                                        <div
                                                style={{ width: `${(correctAns / questionSet.length) * 100}%` }}
                                                className="bar bars bg-white h-full w-full"
                                        ></div> 
                                </div>
                                <div className="w-36 bg-white dflex rounded-md p-2 text-black">
                                         
                                        Questions: {counter + 1} / {questionSet.length} 
                                </div>
                                <h2 className="text-3xl "> score : {score} </h2>
                        </div>

                        {meme ? (
                                <div className="h-64 w-64">
                                         
                                        <img
                                                src={`${img[Math.floor(Math.random()*(99-0))].url}`}
                                                alt=""
                                        /> 
                                </div>
                        ) : (
                                <>
                                {!showresult ? <div className="relative h-[90%] w-[90%] bg-white rounded-lg md:p-20 p-8 flex flex-col  justify-between">
                                                <h1 className="md:text-5xl text-xl text-center">
                                                         
                                                        Question: {course[0]?.quizQuestion[counter]?.question} 
                                                </h1>

                                                <div className="flex justify-center md:flex-row flex-col">
                                                        {course[0]?.quizQuestion[counter]?.answer.map((v, i) => {
                                                                return (
                                                                        <div
                                                                                key={v}
                                                                                className={` ${show && v == course[0]?.quizQuestion[counter]?.correct[0]
                                                                                                ? "bg-green-300"
                                                                                                : show
                                                                                                        ? "bg-red-300"
                                                                                                        : `bg-cyan-300`
                                                                                        } hover:animate-animation-thump md:h-44 md:w-80 h-14   m-6 rounded-2xl flex text-center items-center justify-center text-3xl cursor-pointer`}
                                                                                onClick={() => {
                                                                                        ans(v);
                                                                                }}
                                                                        >
                                                                                 
                                                                                {v}
                                                                        </div>
                                                                );
                                                        })}
                                                </div>
                                                {show && (
                                                        <button
                                                                className="absolute bottom-5 right-5 text-3xl rounded-lg bg-cyan-300 h-16 w-32 ml-auto"
                                                                onClick={nextQues}
                                                        >
                                                                {counter + 1 === questionSet.length ? "Result" : "Next"} 
                                                        </button>
                                                )}
                                        </div> :
                                        <div className="text-white">
                                                <h1 className="text-5xl"> Results </h1>
                                                <h2 className="text-3xl"> Score: {score} </h2>
                                                <img
                                                        src="https://cdn-icons-png.flaticon.com/512/3146/3146600.png"
                                                        className="h-60"
                                                        alt=""
                                                />
                                                <Link className="h-56 w-44 rounded-md " to='/' > Solve more quizz 🚀 </Link>
                                        </div>}
                                </>
                        )}
                </div>
        );
}
