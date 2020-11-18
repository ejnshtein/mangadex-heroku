import GraphQL from 'graphql'
import { PartialChapters } from '../schema/PartialChapters.js'
import { User } from '../schema/User.js'
import { UserManga } from '../schema/UserManga.js'

const { GraphQLInt: IntType, GraphQLNonNull: NonNullType } = GraphQL

export const UserMethods = {
  // user: {
  //   type: new ObjectType({
  //     name: 'UserResolver',
  //     fields: () => ({
  getUser: {
    type: User,
    description: 'Get a user',
    args: {
      userId: { type: new NonNullType(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getUser(query)
    }
  },
  getUserChapters: {
    type: PartialChapters,
    description:
      'Get partial information about the chapters uploaded by the user',
    args: {
      userId: { type: new NonNullType(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getUserChapters(query)
    }
  },
  getUserManga: {
    type: UserManga,
    description: " Get a user's personal data for any given manga",
    args: {
      userId: { type: new NonNullType(IntType) },
      mangaId: { type: new NonNullType(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getUserManga(query)
    }
  }
}
