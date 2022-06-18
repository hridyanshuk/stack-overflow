// Imports
import express from "express"



// app configs

const app = express()

const port = process.env.port || 9000

// middlewares

app.use(express.json())

// APIs
app.post('/question/post', (req, res) => {
    const request = req.body
    const question = request.question
    const tags = request.tags
    console.log(question)
    console.log(tags)
    
    res.status(200)
    .send({
        question: question,
        tags: tags
    })
    // res.status(200).send('posted')
})

// listen to port

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})