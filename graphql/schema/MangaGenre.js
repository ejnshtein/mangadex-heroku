import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export default new ObjectType({
  name: 'MangaGenre',
  fields: {
    id: { type: IntType },
    label: { type: StringType }
  }
})
