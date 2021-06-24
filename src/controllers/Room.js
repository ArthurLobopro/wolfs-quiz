const Database = require('../db/config')
module.exports = {
    async create(req,res){
        const db = await Database()
        const password = req.body.password
        let room = ''
        for(let i =0;i < 6; i++){
            room+= Math.floor(Math.random() * 10)
        }

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
    }
}