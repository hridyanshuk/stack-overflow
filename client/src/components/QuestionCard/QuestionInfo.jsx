export default ({ user, timeStamp }) => {
    
    return (
        <div className="question_card_info">
            <a href="">{user}</a>
            <div className="question_card_timeStamp">
                {timeStamp}
            </div>
        </div>
    )
}