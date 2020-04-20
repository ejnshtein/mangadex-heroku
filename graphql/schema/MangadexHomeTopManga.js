import GraphQL from 'graphql'
import { client } from '../../client.js'
import Manga from './Manga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLString: StringType
} = GraphQL

export default new ObjectType({
  name: 'HomeTopManga',
  description: 'Mangadex home top manga',
  fields: {
    id: { type: IntType },
    title: { type: StringType },
    manga_extended: {
      type: Manga,
      async resolve (chapter) {
        const { manga } = await client.getManga(chapter.id, true)
        return manga
      }
    },
    cover_url: { type: StringType },
    follows: { type: IntType },
    rating: { type: IntType },
    users: { type: IntType }
  }
})
