import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLNonNull: NonNullType,
  GraphQLInt: IntType
} = GraphQL

export const Follow = new ObjectType({
  name: 'Follow',
  description: 'Follow object',
  fields: {
    id: { type: new NonNullType(IntType) },
    name: { type: StringType }
  }
})
