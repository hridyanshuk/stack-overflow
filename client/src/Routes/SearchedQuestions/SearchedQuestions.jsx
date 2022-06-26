import QuestionCard from "../../components/QuestionCard/QuestionCard"

export default ({ questions }) => {
    <div className="searched_questions">
        {questions.map((question) => <QuestionCard question={question} />)}
    </div>
}