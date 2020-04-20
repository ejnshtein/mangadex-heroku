import GraphQL from 'graphql'
import MangadexHomeTopChapter from './MangadexHomeTopChapter.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLList: List
} = GraphQL

export default new ObjectType({
  name: 'HomeTopChapters',
  description: 'Mangadex home page top chapters',
  fields: {
    six_hours: { type: new List(MangadexHomeTopChapter) },
    day: { type: new List(MangadexHomeTopChapter) },
    week: { type: new List(MangadexHomeTopChapter) }
  }
})
