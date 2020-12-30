import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const Relation = new ObjectType({
  name: 'Relation',
  fields: {
    id: { type: IntType },
    name: { type: StringType },
    pairId: { type: IntType }
  }
})
