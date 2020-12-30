import GraphQL from 'graphql'
import { TopManga } from './TopManga.js'

const { GraphQLObjectType: ObjectType, GraphQLList: ListType } = GraphQL

export const TopMangas = new ObjectType({
  name: 'TopMangas',
  description: 'Top mangas',
  fields: {
    follows: { type: new ListType(TopManga) },
    rating: { type: new ListType(TopManga) }
  }
})
