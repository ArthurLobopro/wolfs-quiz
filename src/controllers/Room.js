const Database = require('../db/config')

const RoomController = {
    async create(req,res){
        const db = await Database()
        const password = req.body.password
        let room = ''
        
        while(true){
            for(let i =0;i < 6; i++){
                room+= Math.floor(Math.random() * 10)
            }
        
            //Verificação se a sala já existe
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
        
            if(!roomsExistIds.indexOf(room) !== -1){
                break
            }else{
                room = ''
            }
        }
    
        //Inserir sala no banco de dados
        await db.run(`INSERT INTO rooms (
            id,
            pass
            ) VALUES (
                ${room},
                ${password}
            )`)
    
        await db.close()
    
        // console.table({room,password})
    
        res.redirect(`/room/${room}`)
    },
    async open(req,res){
        const roomId = req.params.room
        const db = await Database()

        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0`)
        const readQuestions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        await db.close()

        res.render('room', { roomId, questions, readQuestions, isVoid: questions.length === 0 && readQuestions.length === 0 })
    }
}

module.exports = RoomController