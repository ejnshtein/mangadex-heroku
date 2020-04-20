import GraphQL from 'graphql'
import Announcement from './Announcement.js'
import MangadexHomeTopChapters from './MangadexHomeTopChapters.js'
import MangadexHomeTopMangas from './MangadexHomeTopMangas.js'

const {
  GraphQLObjectType: ObjectType
} = GraphQL

export default new ObjectType({
  name: 'Home',
  description: 'Mangadex home page',
  fields: {
    announcement: { type: Announcement },
    top_chapters: { type: MangadexHomeTopChapters },
    top_manga: { type: MangadexHomeTopMangas }
  }
})
