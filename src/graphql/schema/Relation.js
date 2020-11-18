import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const Tag = new ObjectType({
  name: 'Tag',
  fields: {
    id: { type: IntType },
    name: { type: StringType },
    pairId: { type: IntType }
  }
})
