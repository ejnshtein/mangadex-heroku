import GraphQL from 'graphql'
import MangadexHomeTopManga from './MangadexHomeTopManga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLList: List
} = GraphQL

export default new ObjectType({
  name: 'HomeTopMangas',
  description: 'Mangadex home page top mangas',
  fields: {
    follows: { type: new List(MangadexHomeTopManga) },
    rating: { type: new List(MangadexHomeTopManga) }
  }
})
