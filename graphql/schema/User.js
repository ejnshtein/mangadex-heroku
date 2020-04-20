import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export default new ObjectType({
  name: 'User',
  fields: {
    id: { type: IntType },
    username: { type: StringType }
  }
})
