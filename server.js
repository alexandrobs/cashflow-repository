const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o db
mongoose.connect('mongodb://localhost:27017/product', 
{
useNewUrlParser: true,
useUnifiedTopology: true
})

.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));

requireDir('./src/models');

//routes
app.use('/api', require('./src/routes'));

app.listen(3001);