import { sql } from './db.js'

sql`DROP TABLE IF EXISTS videos`
.then(() =>{
    console.log("Tabela de vídeos deletada")
})


sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    Title TEXT,
    description TEXT,
    duration INTEGER
);
`
.then(() => {
    console.log("Tabela criada")
})