import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLNonNull: NonNullType,
  GraphQLInt: IntType
} = GraphQL

export const PartialGroup = new ObjectType({
  name: 'PartialGroup',
  description: 'Partial group object.',
  fields: {
    id: { type: new NonNullType(IntType) },
    name: { type: StringType }
  }
})
