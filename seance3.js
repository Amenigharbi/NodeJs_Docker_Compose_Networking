const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
require('dotenv').config()
console.log(process.env)
mongoose.connect(process.env.url)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));
app.get('/', (req, res) => {
  res.send('Hello World!')
}),

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})