const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const usersModel = require('./src/models/user')
const app = express();

const routes = require("./src/routes/index");

mongoose.connect(`mongodb+srv://rachid:${process.env.DB_PWD}@cluster0.gvqznrh.mongodb.net/?retryWrites=true&w=majority`).then(() => console.log("conectado")).catch(e =>{
  console.log("algo deu errado"+"erro: "+e)
})

/*usersModel.deleteMany({})
usersModel.create({
  userName:"desafiosharenergy",
  password:"sh@r3n3rgy"
})*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT'
    ],
  
    allowedHeaders: [
      'Content-Type',
      'authorization'
    ],
  };
  
app.use(cors(corsOpts));
app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log(`ouvindo porta ${process.env.PORT || 3000}!`));

// mongodb+srv://rachid:<password>@cluster0.gvqznrh.mongodb.net/?retryWrites=true&w=majority