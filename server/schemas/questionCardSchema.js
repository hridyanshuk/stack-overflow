import mongoose from "mongoose";

const questionCardSchema = mongoose.Schema({
    user: String,
    title: String,
    question: String,
    timeStamp: String,
    votes: Number,
    answers: Number,
    tags: [{ type: String }],
    count: Number
})

export default mongoose.model("questions", questionCardSchema)


// {
//     "question": {
//         "user": "Hridyanshu",
//         "question": "What is my name?",
//         "timeStamp": "DOB",
//         "votes": 2,
//         "answers": 2,
//         "tags": ["born", "name"]
//     },
//     "tags": [
//         "born", "name"
//     ]
// }