import GraphQL from 'graphql'
import { Announcement } from '../Announcement.js'
import { TopChapters } from './TopChapters.js'
import { TopMangas } from './TopMangas.js'

const { GraphQLObjectType: ObjectType } = GraphQL

export const Home = new ObjectType({
  name: 'Home',
  description: 'Mangadex home page',
  fields: {
    announcement: { type: Announcement },
    top_chapters: { type: TopChapters },
    top_manga: { type: TopMangas }
  }
})
