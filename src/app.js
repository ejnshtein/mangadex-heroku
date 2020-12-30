import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import sensible from 'fastify-sensible'
import cors from 'fastify-cors'
import path from 'path'
import { argv, getArgv } from './lib/index.js'
import { graphql } from './graphql/index.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fastify = Fastify({
  logger: argv('--dev')
})

fastify
  .register(sensible)
  .register(cors, {
    origin: '*'
  })
  .get('/', (_request, reply) => {
    reply.redirect('https://github.com/ejnshtein/mangadex-heroku')
  })
  .register(graphql)
  .register(fastifyStatic, {
    root: path.join(__dirname, './public'),
    prefix: '/',
    decorateReply: false
  })
  .setNotFoundHandler((_request, reply) => {
    reply.notFound()
  })

const port = argv('--port') ? getArgv('--port') : process.env.PORT || 3000
const host = argv('--no-host')
  ? undefined
  : argv('--host')
  ? getArgv('--host')
  : argv('--heroku')
  ? '0.0.0.0'
  : undefined

fastify
  .listen(port, host)
  .then((address) => {
    console.log(`Start address - ${address}`)
  })
  .catch((err) => {
    console.log(`Startup error: ${err}`)
  })
