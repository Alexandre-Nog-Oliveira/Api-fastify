import { randomUUID } from "crypto"
import { sql } from './db.js'

export class databasePostgres {
    #videos = new Map()

    async list(search){
       
        let videos

        if(search){
            videos = await sql`SELECT * FROM VIDEOS WHERE TITLE ILIKE ${'%' + search + '%'} `
        } else {
            videos = await sql`SELECT * FROM VIDEOS`
        }

        return videos
    }

    async create(video){
     const videoId = randomUUID()
        const { title, description, duration } = video

        await sql`INSERT INTO VIDEOS (id, title, description, duration ) values ( ${videoId}, ${title}, ${description}, ${duration})` 
    }

    async update(id, video){
        const { title, description, duration } = video
        await sql`UPDATE videos set title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`
    }

    async delete(id){
       await sql`DELETE from videos where id = ${id}`
    }

    
}