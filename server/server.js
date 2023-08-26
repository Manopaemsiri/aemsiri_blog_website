const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config()

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
app.get("*", (req,res) => {
  res.json({
    data: "message from server"
  })
}) // สั่ง server อะไรก็ได้ที่มีการสั่ง run ตัว server ขึ้นมาแล้วให้ server response ทันที

const port = process.env.PORT || 8080
app.listen(port,() => console.log(`start server in port ${port}`)) // สั่ง run server