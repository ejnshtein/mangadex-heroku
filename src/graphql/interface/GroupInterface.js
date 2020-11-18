import GraphQL from 'graphql'

const {
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLInterfaceType: InterfaceType
} = GraphQL

export const GroupInterface = new InterfaceType({
  name: 'GroupInterface',
  description: 'Basic fields for group object.',
  fields: {
    id: { type: IntType },
    name: { type: StringType }
  }
})
