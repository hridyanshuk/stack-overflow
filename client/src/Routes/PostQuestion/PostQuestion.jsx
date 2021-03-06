import './postquestion.css'
import axios from '../../axios'
import { useRef } from 'react'
import { useEffect } from 'react'


export default () => {
    const titleRef = useRef(null)
    const questionRef = useRef(null)
    const tagsRef = useRef(null)

    // useEffect(() => {
    //     axios.get('/question/totalcount').then((response) => {
    //         alert(response)
    //     })
    // }, [])

    const postQuestion = async () => {
        const titleElement = titleRef.current
        const questionElement = questionRef.current
        const tagElement = tagsRef.current
        var tags = tagElement.value.split(' ')
        
        const response = await axios.get('/question/totalcount')
        const count = Number(response.data)+1
        const time = new Date().toDateString()
        console.log(time)
        // console.log(typeof(time))
        const question = {
            user: "Hridyanshu",
            title: titleElement.value,
            question: questionElement.value,
            timeStamp: time,
            votes: 0,
            answers: 0,
            tags: tags,
            count: count
        }
        // console.log(tags)
        axios.post('/question/post', question)
    }
    
    return (
        <div className="post_question">
            <div className="post_question_content">
                <div className="post_question_heading">
                    Ask a public question
                </div>
                <label> Title </label>
                <input placeholder='Ask a question' type="text" ref={titleRef} />
                <label> Body </label>
                <textarea className="post_question_body" ref={questionRef} />
                <label> Tags </label>
                <input placeholder='Tags' type="text" name="post_question_tags" ref={tagsRef} />

                <button className="content_button" onClick={() => postQuestion()}>Post this question</button>
            </div>
        </div>
    )
}