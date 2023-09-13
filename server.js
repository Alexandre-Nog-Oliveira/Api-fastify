import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'Helo Word'
})

server.listen({
    port: 3333,
})