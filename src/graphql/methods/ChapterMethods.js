import GraphQL from 'graphql'
import { Chapter } from '../schema/Chapter.js'

const { GraphQLInt: IntType, GraphQLNonNull: NonNull } = GraphQL

export const ChapterMethods = {
  getChapter: {
    type: Chapter,
    description: 'Get a chapter',
    args: {
      chapterId: { type: new NonNull(IntType) }
    },
    resolve: async (_, query, { dataSources }) => {
      return dataSources.mangadex.getChapter(query)
    }
  }
}
