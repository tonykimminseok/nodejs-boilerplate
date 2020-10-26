//The start of the Back-end
const express = require('express')
const app = express()
const port = 5000

// Import User Schema
const { User } = require("./models/User")

// Import Body Parser
const bodyparser = require('body-parser')

// Setting Body Parser on Middleware option
// below code is to analyze and collect 'application/x-www-form-urlencoded' formatted data
app.use(bodyparser.urlencoded({extended: true}))
// below code is to analyze and collect 'application/json' formatted data
app.use(bodyparser.json())

//connecting to Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://boilerplate1:plate123@mycluster.drtel.mongodb.net/userDB?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongoose MongoDB connected!'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'))

// this is posting the registration information from the client side
// register router
app.post('/register', (req, res) => {
    // To get a body 
    const user = new User(req.body)

    // this is a MongoDB method
    // save information into User model
    user.save((err, userInfo) => {
        if (err) {
            return res.json({ success: false, err})
        }
        return res.status(200).json({
            success: true
        })
    })
})

// app.get('/register', (req, res) => {
//     // To get a body 
//     res.send("hi")
// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

