import QuestionCard from "../../components/QuestionCard/QuestionCard"
import './home.css'
import {Link} from 'react-router-dom'
function Home({ questions }) {



    return (
        <div className="home">

            <div className="content_header">
                <h1 className="content_heading">Top Questions</h1>
                <Link to="/ask" className="content_button">Post question</Link>
            </div>

            <div className="homediv">
                {questions.map((question) => <QuestionCard question={question}/>)}
            </div>
        </div>
    )
}

export default Home