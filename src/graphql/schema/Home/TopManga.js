import GraphQL from 'graphql'
import { client } from '../../../client.js'
import { Manga } from '../Manga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLString: StringType,
  GraphQLFloat: FloatType
} = GraphQL

export const TopManga = new ObjectType({
  name: 'TopManga',
  description: 'Top manga',
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    manga_extended: {
      type: Manga,
      async resolve(chapter) {
        return client.manga.getManga(chapter.id)
      }
    },
    cover_url: { type: StringType },
    follows: { type: IntType },
    rating: { type: FloatType },
    users: { type: IntType }
  }
})
