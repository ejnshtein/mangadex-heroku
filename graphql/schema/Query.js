import GraphQL from 'graphql'
import MangaResponse from './MangaResponse.js'
import ChapterExtended from './ChapterExtended.js'
import Group from './Group.js'
import UserExtended from './UserExtended.js'
import MangadexHome from './MangadexHome.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLNonNull: NonNull
} = GraphQL

export default new ObjectType({
  name: 'Query',
  fields: () => ({
    getManga: {
      type: MangaResponse,
      args: {
        id: { type: new NonNull(IntType) }
      },
      resolve: async (_, query, { dataSources }) => {
        return dataSources.mangadex.getManga(query)
      }
    },
    getChapter: {
      type: ChapterExtended,
      args: {
        id: { type: new NonNull(IntType) }
      },
      resolve: async (_, query, { dataSources }) => {
        return dataSources.mangadex.getChapter(query)
      }
    },
    getGroup: {
      type: Group,
      args: {
        id: { type: new NonNull(IntType) }
      },
      resolve: async (_, query, { dataSources }) => {
        return dataSources.mangadex.getGroup(query)
      }
    },
    getUser: {
      type: UserExtended,
      args: {
        id: { type: new NonNull(IntType) }
      },
      resolve: async (_, query, { dataSources }) => {
        return dataSources.mangadex.getUser(query)
      }
    },
    getHome: {
      type: MangadexHome,
      resolve: async (_, query, { dataSources }) => {
        return dataSources.mangadex.getHome(query)
      }
    }
  })
})
