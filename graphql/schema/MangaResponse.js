import GraphQL from 'graphql'
import ResponseInterface from './ResponseInterface.js'
import Manga from './Manga.js'
import Chapter from './Chapter.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLList: List
} = GraphQL

export default new ObjectType({
  name: 'MangaResponse',
  description: 'Manga response object.',
  interfaces: [ResponseInterface],
  fields: {
    manga: { type: Manga },
    chapter: { type: new List(Chapter) },
    status: { type: StringType },
  }
})
