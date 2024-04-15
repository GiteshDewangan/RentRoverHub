const express = require("express")
require('dotenv').config()
const router = require('./Routers/index')
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')

const app = express()

// setting up middlewares 
app.use(express.json())
app.use(router)
app.use(cors())
app.use(express.static('build'))
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


const PORT = process.env.PORT || 8100

mongoose.connect(process.env.URI)
  .then(() => {
    console.log("Connected to the database successfully ...");
    app.listen(PORT, (err) => {
      if (err) {
        console.log("Something went wrong: ", err);
      }
      console.log(`Server is running on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Can not connect to the Database ...", error);
  });