const express = require('express')
const app = express()
const port = 3000
const item=require('./models/item')
const mongoose = require('mongoose');

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));

const mongoUrlFromLocalHost="mongodb://root:example@localhost:5001";
const mongoUrlFromContainer="mongodb://root:example@mongodb:27017";

mongoose.connect(mongoUrlFromContainer)
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));
app.get('/', (req, res) => {
  res.send('Hello World!')
}),

app.get('/items', (req, res) => {
  item.find()
  .then((items)=>res.send({items}))
  .catch((err)=>res.status(500).json({err}));

}),

app.post("/items/add",(req,res)=>{
  const newItem=new item({
    name:req.body.name,
  });
  newItem
   .save()
   .then((item)=>res.send({message: "item saved successfully",item}))
   .catch((err)=>res.status(500).json({err}));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})