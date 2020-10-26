//백엔드의 시작점
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World'))


//------------------------------------------------------

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://boilerplate1:plate123@mycluster.drtel.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongoose MongoDB connected!'))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))