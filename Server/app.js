const express = require('express')
require('dotenv').config()
require('express-async-errors')
const authRoute = require('./routes/route')
const app = express()

//MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})
app.use('/api/v1/auth-project', authRoute)
const port = 5000

const start = () => {
  try {
    app.listen(port, () => console.log(`server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
