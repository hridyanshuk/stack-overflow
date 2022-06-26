import mongoose from "mongoose";

const tagSchema = mongoose.Schema({
    tag: { type: String, unique: true, required: true }
})

export default mongoose.model('tags', tagSchema)