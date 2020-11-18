import ASF from 'apollo-server-fastify'
import LRU from 'lru-cache'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import schema from './schema/index.js'
import { argv } from '../lib/index.js'
import { Mangadex } from './datasources/mangadex.js'

const { ApolloServer } = ASF

const rCache = new LRU()

const apollo = new ApolloServer({
  schema,
  // resolvers,
  cacheControl: {
    defaultMaxAge: 30
  },
  dataSources: () => ({
    mangadex: new Mangadex()
  }),
  context: (req) => ({
    isDev: argv('--dev')
  }),
  introspection: true,
  playground: true,
  debug: argv('--dev'),
  plugins: [
    responseCachePlugin({
      cache: {
        async delete(key) {
          return rCache.del(key)
        },
        async get(key) {
          return rCache.get(key)
        },
        async set(key, value, options) {
          return rCache.set(
            key,
            value,
            (options && options.ttl * 1000) || 5 * 60 * 1000
          )
        }
      },
      shouldReadFromCache: (ctx) => {
        return ctx.operation.operation === 'query'
      },
      shouldWriteToCache: (ctx) => {
        return ctx.operation.operation === 'query'
      }
    })
  ]
})

export const graphql = apollo.createHandler()
