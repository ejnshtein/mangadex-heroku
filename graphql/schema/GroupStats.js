import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType
} = GraphQL

export default new ObjectType({
  name: 'GroupStats',
  fields: {
    views: { type: IntType },
    follows: { type: IntType },
    total_chapters: { type: IntType }
  }
})
