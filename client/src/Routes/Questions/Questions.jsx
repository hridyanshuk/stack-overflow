import axios from "./../../axios"
import { useState } from "react"
import { useEffect } from "react"
import QuestionCard from "../../components/QuestionCard/QuestionCard"

function Questions({ questions }) {
    return (
        <div className="main_questions">
            {questions.map((question) => <QuestionCard question={question}/>)}
        </div>
    )
}

export default Questions