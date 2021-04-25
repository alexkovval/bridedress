const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const app = express()

 const dress = require('./routes/dress')

mongoose.connect(keys.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

mongoose.connection.on('connected', () => {
    console.log("Successful connection to the database")
});

mongoose.connection.on('error', (err) => {
    console.log("Not successful connection to the database" + err)
});


app.use('/api/dress', dress);



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/bridedress'))
  
    app.get('*', (req, res) => {
      res.sendFile(
        path.resolve(
          __dirname, 'client', 'dist', 'bridedress', 'index.html'
        )
      )
    })
  }
  

module.exports = app