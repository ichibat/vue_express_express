
//initial requirement
const express = require("express");
const cors = require("cors");
//port setting
const port = process.env.PORT || 3000;

// app for express
const app = express();

//middlewares
//Cor
app.use(cors());

//Hello World!
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//hoge routing
app.get('/hoge/:name', (req, res) => {
  let data = req.params
  console.log(data.name);
  res.json({
    name: data.name
  })
});

// port listening
app.listen(port, () => console.log(`OK, Server started on port ${port}`));