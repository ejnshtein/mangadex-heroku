import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const GroupUser = new ObjectType({
  name: 'GroupUser',
  fields: {
    id: { type: IntType },
    name: { type: StringType }
  }
})
