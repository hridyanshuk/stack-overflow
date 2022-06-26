import Header from "./components/Header/Header.jsx"
import SideBarLeft from "./components/SidebarLeft/SidebarLeft.jsx";
// import SideBarRight from "./components/SidebarRight/SidebarRight.jsx"
import React, { useEffect, useState } from "react";
import axios from './axios'
// import { GetDerivedStateFromError, componentDidCatch, logErrorToMyService } from "react";

import Home from './Routes/Home/Home'
import Questions from './Routes/Questions/Questions'
import Tags from './Routes/Tags/Tags'
import Users from './Routes/Users/Users'
import PostQuestion from "./Routes/PostQuestion/PostQuestion.jsx";



import { Route, Routes } from 'react-router-dom'
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children; 
//   }
// }


function App() {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        axios.get('/question/list').then(response => setQuestions(response.data))
    }, [])

    return (
        <div className="app">
            <SideBarLeft />
            <div className="main">
                <Header />
                <div className="main_content">
                <Routes>
                    <Route path='/' element={<Home questions={questions}/>} />
                    <Route path='/questions' element={<Questions questions={questions} setQues={setQuestions} />} />
                    <Route path='/tags' element={<Tags />} />
                    <Route path='/users' element={<Users />} />
                    <Route path = '/ask' element = {<PostQuestion />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App;

