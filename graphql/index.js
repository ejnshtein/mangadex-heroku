import ASF from 'apollo-server-fastify'
import responseCachePlugin from 'apollo-server-plugin-response-cache'
import schema from './schema/index.js'
import { argv } from '../lib/index.js'
import { Mangadex } from './datasources/mangadex.js'

const { ApolloServer } = ASF

const apollo = new ApolloServer({
  schema,
  // resolvers,
  cacheControl: {
    defaultMaxAge: 30
  },
  dataSources: () => ({
    mangadex: new Mangadex()
  }),
  context: req => ({
    isDev: argv('--dev')
  }),
  introspection: argv('--dev'),
  playground: true,
  debug: argv('--dev'),
  plugins: [responseCachePlugin()]
})

export default apollo.createHandler()
