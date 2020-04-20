import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType
} = GraphQL

export default new ObjectType({
  name: 'UserStats',
  fields: {
    views: { type: IntType },
    uploads: { type: IntType }
  }
})
