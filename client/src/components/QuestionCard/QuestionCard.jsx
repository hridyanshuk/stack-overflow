import './questioncard.css'

import Question from './Question'
import QuestionStats from './QuestionStats'
import QuestionInfo from './QuestionInfo'
import QuestionTags from './QuestionTags'

import { Link } from 'react-router-dom'

export default ({ question }) => 
    // <Link to = "">
        <div className="question_card">
            {/* <div className="question_card_left"></div> */}
            <QuestionStats votes = {question.votes} answers = {question.answers}/>
            <div className="question_card_right">
                <Question question = {question.question}/>
                <QuestionTags tags = {question.tags}/>
                <div className="question_card_bottom">
                    <QuestionInfo user = {question.user} timeStamp = {question.timeStamp}/>
                </div>
            </div>
        </div>
    // </Link>