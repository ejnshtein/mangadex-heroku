import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import fastifySensible from 'fastify-sensible'
import { join } from 'path'
import { argv, getArgv } from './lib/index.js'
import graphql from './graphql/index.js'

const fastify = Fastify({
  logger: argv('--dev')
})

fastify
  .register(fastifySensible)
  .get('/', (request, reply) => {
    reply.redirect('https://github.com/ejnshtein/mangadex-heroku')
  })
  .register(graphql)
  .register(fastifyStatic, {
    root: join(process.cwd(), './public'),
    prefix: '/',
    decorateReply: false
  })
  .setNotFoundHandler((request, reply) => {
    reply.notFound()
  })

const port = argv('--port')
  ? getArgv('--port')
  : process.env.PORT || 3000
const host = argv('--no-host')
  ? undefined
  : argv('--host')
    ? getArgv('--host')
    : undefined

fastify.listen(
  port,
  host
)
  .then(addres => {
    console.log(`Start address - ${addres}`)
  })
  .catch(err => {
    console.log(`Startup error: ${err}`)
  })
