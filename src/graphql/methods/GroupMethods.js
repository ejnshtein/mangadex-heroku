import GraphQL from 'graphql'
import { Group } from '../schema/Group.js'
import { PartialChapters } from '../schema/PartialChapters.js'

const { GraphQLInt: IntType, GraphQLNonNull: NonNull } = GraphQL

export const GroupMethods = {
  getGroup: {
    type: Group,
    description: 'Get a group',
    args: {
      groupId: { type: new NonNull(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getGroup(query)
    }
  },
  getGroupChapters: {
    type: PartialChapters,
    description:
      'Get partial information about the chapters belonging to the group',
    args: {
      groupId: { type: new NonNull(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getGroupChapters(query)
    }
  }
}
