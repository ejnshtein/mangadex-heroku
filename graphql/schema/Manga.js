import GraphQL from 'graphql'
import MangaGenre from './MangaGenre.js'
import MangaLink from './MangaLink.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLList: List
} = GraphQL

export default new ObjectType({
  name: 'Manga',
  description: 'Manga object.',
  fields: {
    title: { type: StringType },
    artist: { type: StringType },
    author: { type: StringType },
    description: { type: StringType },
    cover_url: { type: StringType },
    status: { type: IntType },
    status_text: { type: StringType },
    genres: { type: new List(MangaGenre) },
    last_chapter: { type: StringType },
    lang_name: { type: StringType },
    lang_flag: { type: StringType },
    hentai: { type: IntType },
    links: { type: new List(MangaLink) }
  }
})
