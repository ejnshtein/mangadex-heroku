import GraphQL from 'graphql'
import { Group } from './Group.js'
const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLNonNull: NonNullType,
  GraphQLList: ListType
} = GraphQL

export const PartialChapter = new ObjectType({
  name: 'PartialChapter',
  description: 'Partial chapter object.',
  fields: {
    chapter: { type: StringType },
    comments: { type: IntType },
    groups: { type: new ListType(Group) },
    hash: { type: StringType },
    id: { type: new NonNullType(IntType) },
    language: { type: StringType },
    mangaId: { type: IntType },
    mangaTitle: { type: StringType },
    threadId: { type: IntType },
    timestamp: { type: IntType },
    title: { type: StringType },
    uploader: { type: IntType },
    views: { type: IntType },
    volume: { type: StringType }
  }
})
