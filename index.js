const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const categories =require('./data/categories.json')
const course = require('./data/course.json');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course-categories', (req, res) =>     {
    res.send(categories);
})

app.get('/category/:id', (req, res) =>{
  const id = req.params.id;
  if(id === "08"){
    res.send(course)
  }
  else{
    const category_course= course.filter(n => n.category_id === id);
    res.send(category_course);
  }
})

app.get('/course', (req, res) =>{
  res.send(course);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})