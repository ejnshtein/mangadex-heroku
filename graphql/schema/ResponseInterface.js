import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLList: List,
  GraphQLNonNull: NonNull,
  GraphQLInterfaceType: InterfaceType
} = GraphQL

export default new InterfaceType({
  name: 'MangadexResponse',
  description: 'Basic fields from Mangadex response object.',
  fields: {
    status: { type: StringType }
  }
})
