import GraphQL from 'graphql'
import { client } from '../../client.js'
import { Manga } from './Manga.js'
import { PartialGroup } from './PartialGroup.js'

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
    pages: { type: new ListType(StringType) },
    server: { type: StringType },
    serverFallback: { type: StringType },
    status: { type: StringType },
    timestamp: { type: IntType },
    title: { type: StringType },
    volume: { type: StringType },
    languageName: { type: StringType },
    fallbackPages: { type: new ListType(StringType) }
  }
})
