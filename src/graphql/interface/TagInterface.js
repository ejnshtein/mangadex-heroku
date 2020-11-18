import GraphQL from 'graphql'

const {
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLInterfaceType: InterfaceType
} = GraphQL

export const TagInterface = new InterfaceType({
  name: 'TagInterface',
  description: 'Basic fields for tag object.',
  fields: {
    id: { type: IntType },
    name: { type: StringType }
  }
})
