import GraphQL from 'graphql'
import { Manga } from './Manga.js'
import { PartialGroup } from './PartialGroup.js'
import { client } from '../../client.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLNonNull: NonNull,
  GraphQLList: ListType
} = GraphQL

export const Chapter = new ObjectType({
  name: 'Chapter',
  description: 'Chapter object',
  fields: {
    chapter: { type: StringType },
    comments: { type: IntType },
    groups: { type: new ListType(PartialGroup) },
    hash: { type: StringType },
    id: { type: new NonNull(IntType) },
    language: { type: StringType },
    mangaId: { type: IntType },
    mangaTitle: { type: StringType },
    manga: {
      type: Manga,
      async resolve(chapter) {
        return client.manga.getManga(chapter.mangaId)
      }
    },
    pages: {
      type: new ListType(StringType),
      description:
        "Chapter pages (if status === 'external' there will be single link to the chapter source))",
      resolve(chapter) {
        // api can return string instead of list of strings when chapter is not hosted on mangadex
        return typeof chapter.pages === 'string'
          ? [chapter.pages]
          : chapter.pages
      }
    },
    server: { type: StringType },
    serverFallback: { type: StringType },
    status: { type: StringType },
    threadId: { type: IntType },
    timestamp: { type: IntType },
    title: { type: StringType },
    volume: { type: StringType },
    languageName: { type: StringType },
    fallbackPages: { type: new ListType(StringType) }
  }
})
