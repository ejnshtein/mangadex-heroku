import GraphQL from 'graphql'
import { client } from '../../../client.js'
import { Chapter } from '../Chapter.js'
import { Manga } from '../Manga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLString: StringType
} = GraphQL

export const TopChapter = new ObjectType({
  name: 'TopChapter',
  description: 'Top chapter',
  fields: {
    id: { type: IntType },
    chapter: { type: StringType },
    chapter_extended: {
      type: Chapter,
      async resolve(chapter) {
        return client.chapter.getChapter(chapter.id)
      }
    },
    title: { type: StringType },
    manga_id: { type: IntType },
    manga_extended: {
      type: Manga,
      async resolve(chapter) {
        return client.manga.getManga(chapter.manga_id)
      }
    },
    cover_url: { type: StringType },
    views: { type: IntType }
  }
})
