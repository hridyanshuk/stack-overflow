import axios from "./../../axios"
import { useState } from "react"
import { useEffect } from "react"
import QuestionCard from "../../components/QuestionCard/QuestionCard"
import SearchByTags from "./SearchByTags"
import './questions.css'

function Questions({ questions, setQues }) {
    const [qstate, setQstate] = useState(questions)
    useEffect(() => {
        if(qstate.length === 0) {
            axios.get('/question/list').then(response => {
                setQstate(response.data)
                // setQues(response.data)
            })
        }
    }, [])
    
    return (
        <div className="main_questions">
            <SearchByTags searchList={setQstate}/>
            {qstate.map((question) => <QuestionCard question={question}/>)}
        </div>
    )
}

export default Questions