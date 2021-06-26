const Database = require('../db/config')

const QuestionController = {
    async index(req,res){
        const { room, question, action } = req.params
        const password = req.body.password

        // Verificação da senha
        const db = await Database()
        const dbPassword = await db.get(`SELECT * FROM rooms WHERE id = ${room}`)
        
        if(dbPassword.pass === password){
            if(action === 'check'){
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${question}`)
            }

            if(action === 'delete'){
                db.run(`DELETE FROM questions WHERE id = ${question}`)
            }

            return res.redirect(`/room/${room}`)
        }

        res.render('pass-error', { room })
        console.log({ room, question, action });
        // console.log(password);
    },
    async create(req,res){
        const question = req.body.question
        const room = req.params.room
        const db = await Database()

        await db.run(`INSERT INTO questions (
            title,
            read,
            room
        ) VALUES (
            "${question}",
            0,
            "${room}"
        )`)

        await db.close()

        res.redirect(`/room/${room}`)
    },
    async delete(){
        const db = await Database()
        // const roomPassword = await 
    }
}

module.exports = QuestionController