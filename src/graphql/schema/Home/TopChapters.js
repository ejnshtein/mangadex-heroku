import GraphQL from 'graphql'
import { TopChapter } from './TopChapter.js'

const { GraphQLObjectType: ObjectType, GraphQLList: List } = GraphQL

export const TopChapters = new ObjectType({
  name: 'TopChapters',
  description: 'Top chapters',
  fields: {
    six_hours: { type: new List(TopChapter) },
    day: { type: new List(TopChapter) },
    week: { type: new List(TopChapter) }
  }
})
