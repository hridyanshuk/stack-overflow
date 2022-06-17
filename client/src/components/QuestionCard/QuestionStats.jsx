import { useEffect } from "react"
import { useState } from "react"

export default ({votes, answers}) => {
    
    const [voteCount, setVoteCount] = useState(0)
    const [answerCount, setAnswerCount] = useState(0)

    useEffect(() => {
        if(votes) {
            setVoteCount(votes)
        }
        if(answers) {
            setAnswerCount(answers)
        }
    }, [votes, answers])

    return (
        <div className="question_card_stats">
            <div className="question_stats_left">
                <div>{voteCount}</div>
                <div>{answerCount}</div>
            </div>
            <div className="question_stats_right">
                <div>Votes</div>
                <div>Answers</div>
            </div>
                
        </div>
    )
}