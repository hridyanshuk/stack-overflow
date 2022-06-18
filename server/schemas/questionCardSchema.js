import mongoose from "mongoose";

const questionCardSchema = mongoose.Schema({
    user: String,
    question: String,
    timeStamp: String,
    votes: Number,
    answers: Number,
    tags: [{ type: String }]
})

export default questionCardSchema