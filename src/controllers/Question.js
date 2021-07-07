const Database = require('../db/config')

const QuestionController = {
    async index(req,res){
        const { room, question, action } = req.params
        const password = req.body.password

        // Verificação da senha
        const db = await Database()
        const dbPassword = await db.get(`SELECT * FROM rooms WHERE id = ${room}`)
        
        if(dbPassword.pass === password){
            if(action === 'toogle-check'){
                const { read } = await db.get(`SELECT read FROM questions WHERE id = ${question}`)
                await db.run(`UPDATE questions SET read = ${ read === 0 ? 1 : 0} WHERE id = ${question}`)
            }

            if(action === 'delete'){
                db.run(`DELETE FROM questions WHERE id = ${question}`)
            }

            return res.redirect(`/room/${room}`)
        }

        res.render('pass-error', { room })
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
    }
}

module.exports = QuestionController