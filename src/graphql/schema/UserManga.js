import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const UserManga = new ObjectType({
  name: 'UserManga',
  fields: {
    chapter: { type: StringType },
    followType: { type: IntType },
    mangaId: { type: IntType },
    rating: { type: IntType },
    userId: { type: IntType },
    volume: { type: StringType }
  }
})
