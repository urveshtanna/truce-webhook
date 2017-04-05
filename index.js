'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
	res.send('Hello world!')
})

// for get request
app.get('/webhook/', function (req, res) {
  console.log(req);
  res.send(req);
})

// for POST request
app.post('/webhook/', function (req, res) {
    if(req && req.body && req.body.order_id){
      var text = req.body.order_id;
      res.send(`Received order id ${text}`);
    }
})

// Spin up the server
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
