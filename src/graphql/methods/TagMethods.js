import GraphQL from 'graphql'
import { Tag } from '../schema/Tag.js'

const {
  GraphQLInt: IntType,
  GraphQLNonNull: NonNullType,
  GraphQLList: ListType
} = GraphQL

export const TagMethods = {
  getTags: {
    type: new ListType(Tag),
    description: 'Get all tags',
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getTags(query)
    }
  },
  getTag: {
    type: Tag,
    description: 'Get a tag',
    args: {
      tagId: { type: new NonNullType(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getTag(query)
    }
  }
}
