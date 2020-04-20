import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType
} = GraphQL

export default new ObjectType({
  name: 'MangaLink',
  fields: {
    title: { type: StringType },
    url: { type: StringType }
  }
})
