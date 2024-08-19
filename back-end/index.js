const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require('./Routes/userRoutes')


const PORT = 4000

dotenv.config()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/notes-app").then(()=> {
	console.log("MongoDB is connnect")
})
app.listen(PORT, ()=> {
	console.log(`Server is listening on port ${PORT}`)
})

app.use('/api', userRouter)

