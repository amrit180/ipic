const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT =5000;
const{MONGOURI} = require('./keys')




mongoose.connect(MONGOURI,{
    useNewUrlParser: true ,
    useUnifiedTopology: true
});
mongoose.connection.on('connected',() =>{
    console.log("connect to mongo")
});
mongoose.connection.on('error',(err) =>{
    console.log("eror connecting",err)
});

require('./models/user');

require('./models/post');


app.use(express.json());
app.use(require('./routes/auth'));



app.listen(PORT,()=>{
    console.log('server started',PORT);
});