import GraphQL from 'graphql'
import { Cover } from '../schema/Cover.js'
import { Manga } from '../schema/Manga.js'
import { PartialChapters } from '../schema/PartialChapters.js'

const {
  GraphQLInt: IntType,
  GraphQLNonNull: NonNull,
  GraphQLList: ListType
} = GraphQL

export const MangaMethods = {
  getManga: {
    type: Manga,
    description: 'Get a manga',
    args: {
      mangaId: { type: new NonNull(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getManga(query)
    }
  },
  getMangaChapters: {
    type: PartialChapters,
    description:
      'Get partial information about the chapters belonging to a manga',
    args: {
      mangaId: { type: new NonNull(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getMangaChapters(query)
    }
  },
  getMangaCovers: {
    type: new ListType(Cover),
    description: 'Get a list of covers belonging to a manga',
    args: {
      mangaId: { type: new NonNull(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getMangaCovers(query)
    }
  }
}
