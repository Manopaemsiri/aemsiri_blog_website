const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

const blogRoute = require('./route/blog')


const app = express()

// Connect Cloud Database
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: false
})
.then(() => console.log('Hello Database ^^'))
.catch((err) => console.log(err + '--"'))


// Middleware
app.use(express.json()) // response ส่วนที่เป็น json กลับไปที่ฝั่ง client
app.use(cors())
app.use(morgan('dev')) // ดักตัว request

// Route
app.use('/api', blogRoute)

const port = process.env.PORT || 8080
app.listen(port,() => console.log(`start server in port ${port}`)) // สั่ง run server