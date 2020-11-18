import GraphQL from 'graphql'
import { TopManga } from './TopManga.js'

const { GraphQLObjectType: ObjectType, GraphQLList: List } = GraphQL

export const TopMangas = new ObjectType({
  name: 'TopMangas',
  description: 'Top mangas',
  fields: {
    follows: { type: new List(TopManga) },
    rating: { type: new List(TopManga) }
  }
})
