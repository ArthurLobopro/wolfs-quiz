const express = require('express')

const route = express.Router()

// Gets
route.get('/', (req,res) => res.render('index',{page: 'enter-room'}))
route.get('/create', (req,res) => res.render('index', {page: 'create'} ))
route.get('/room', (req,res) => res.render('room') )


module.exports = route