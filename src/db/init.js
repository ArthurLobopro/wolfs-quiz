const Database = require('./config')

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id TEXT PRIMARY KEY,
            pass TEXT
        )`)

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room TEXT
        )`)

        await db.close()
    }
}

initDb.init()