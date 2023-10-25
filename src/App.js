import { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import axios from "axios";
export const Quizdata = createContext()
function App() {
        const [quizData, setquizData] = useState([]);
        useEffect(() => {
                const fetchData = async () => {
                        const response = await axios('http://localhost:5000/')
                        setquizData(response.data)
                }
                fetchData()
        }, [])
        return (
                <div className=" w-screen bg-[#010713]">
                        <Quizdata.Provider value={quizData}>
                                <BrowserRouter>
                                        <Routes>
                                                <Route path="/" element={<Home />} />
                                                <Route path="/quiz/:quizId" element={<Quiz />} />
                                        </Routes>
                                </BrowserRouter>
                        </Quizdata.Provider>
                </div>
        );
}

export default App;
