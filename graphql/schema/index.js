import GraphQL from 'graphql'
import Query from './Query.js'
// import Mutation from './Mutation.js'

const { GraphQLSchema } = GraphQL

export default new GraphQLSchema({
  query: Query,
  // mutation: Mutation
})
