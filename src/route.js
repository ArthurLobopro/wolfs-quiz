const { render } = require('ejs')
const express = require('express')
const QuestionController = require('./controllers/Question')
const RoomController = require('./controllers/Room')
const route = express.Router()

// Gets
route.get('/', (req,res) => res.render('index',{page: 'enter-room'}))
route.get('/create', (req,res) => res.render('index', {page: 'create'} ))
route.get('/room/:room', (req,res) => res.render('room') )

//  Posts
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomController.create)
route.post('/room/', (req,res) => res.redirect(`/room/${req.body.rooms}`))

module.exports = route