// Imports
import express from "express"
import mongoose from "mongoose"
import cors from 'cors'

import Question from './schemas/questionCardSchema.js'
import Tag from './schemas/tagSchema.js'

import { dbUser, dbPassword } from "./secrets.js"
// app configs

const app = express()

const port = process.env.port || 9000

// middlewares

app.use(express.json())
app.use(cors())

// Database stuff

const connection_url = `mongodb+srv://${dbUser}:${dbPassword}@stackoverflow.uh1qv.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connection_url)

const db = mongoose.connection;

db.once('open', () => {
    console.log("Database connected")
})

// APIs
app.post('/question/post', (req, res) => {
    // const request = req.body
    const question = req.body
    
    console.log(question)
    // console.log(tags)
    
    
    Question.create(question, (err, data) => {
        if(err) res.status(500).send(err)
        else res.status(201).send(data)
    })
})

app.get('/question/totalcount', async (req, res) => {
    const count = await Question.countDocuments()
    res.status(200).send(count)
})

// app.post('/question/post/tags', (req, res) => {
//     const tags = req.body
//     Tag.insertMany(tags, (err, data) => {
//         if(err) res.status(500).send(err)
//         else res.status(201).send(data)
//     })
// })

// listen to port

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})