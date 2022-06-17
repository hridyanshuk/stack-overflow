import { useState } from "react"

export default ({ tags }) => {
    var i=0
    const [allTags, setAllTags] = useState(tags.map((tag) => {
        i=i+1
        return {
            tag: tag,
            key: i-1
        }
    }))
    return (
        <div className="question_card_tags">
            {/* <button>&lt;</button> */}
            <ul>
                {tags.map((tag) => {
                    return (
                        <li>{tag}</li>
                    )
                })}
            </ul>
            {/* <button>&gt;</button> */}
        </div>
    )
}
    