import GraphQL from 'graphql'
import { PartialChapter } from './PartialChapter.js'
import { PartialGroup } from './PartialGroup.js'

const { GraphQLObjectType: ObjectType, GraphQLList: List } = GraphQL

export const PartialChapters = new ObjectType({
  name: 'PartialChapters',
  description: 'Partial chapters object.',
  fields: {
    chapters: { type: new List(PartialChapter) },
    group: { type: new List(PartialGroup) }
  }
})
