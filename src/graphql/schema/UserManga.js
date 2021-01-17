import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLBoolean: BooleanType
} = GraphQL

export const UserManga = new ObjectType({
  name: 'UserManga',
  fields: {
    chapter: { type: StringType },
    followType: { type: IntType },
    mangaId: { type: IntType },
    mangaTitle: { type: StringType },
    mainCover: { type: StringType },
    rating: { type: IntType },
    userId: { type: IntType },
    isHentai: { type: BooleanType },
    volume: { type: StringType }
  }
})
