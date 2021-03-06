import GraphQL from 'graphql'
import { Follow } from '../schema/Follow.js'
import { Home } from '../schema/Home/index.js'
import { Relation } from '../schema/Relation.js'

const { GraphQLList: ListType } = GraphQL

export const MangadexMethods = {
  getHome: {
    type: Home,
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getHome(query)
    }
  },
  getRelations: {
    type: new ListType(Relation),
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getRelations(query)
    }
  },
  getFollows: {
    type: new ListType(Follow),
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getFollows(query)
    }
  }
}
