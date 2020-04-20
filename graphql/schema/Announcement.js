import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType
} = GraphQL

export default new ObjectType({
  name: 'Announcement',
  description: 'Mangadex announcement',
  fields: {
    text: { type: StringType },
    url: { type: StringType }
  }
})
