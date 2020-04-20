import GraphQL from 'graphql'
import { client } from '../../client.js'
import ChapterExtended from './ChapterExtended.js'
import Manga from './Manga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLString: StringType
} = GraphQL

export default new ObjectType({
  name: 'HomeTopChapter',
  description: 'Mangadex home top chapter',
  fields: {
    id: { type: IntType },
    chapter: { type: StringType },
    chapter_extended: {
      type: ChapterExtended,
      async resolve (chapter) {
        return client.getChapter(chapter.id, true)
      }
    },
    title: { type: StringType },
    manga_id: { type: IntType },
    manga_extended: {
      type: Manga,
      async resolve (chapter) {
        const { manga } = await client.getManga(chapter.manga_id, true)
        return manga
      }
    },
    cover_url: { type: StringType },
    views: { type: IntType }
  }
})
