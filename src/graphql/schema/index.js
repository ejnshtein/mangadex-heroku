import GraphQL from 'graphql'
import { Query } from './Query.js'

const { GraphQLSchema } = GraphQL

export default new GraphQLSchema({
  query: Query
})
