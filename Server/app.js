const express = require('express')
require('dotenv').config()
require('express-async-errors')
const authRoute = require('./routes/route')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/errorHandler')

const app = express()

//MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.use('/api/v1/auth-project', authRoute)

const port = 5000

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log(`server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
