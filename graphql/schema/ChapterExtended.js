import GraphQL from 'graphql'
import ResponseInterface from './ResponseInterface.js'
import { client } from '../../client.js'
import Group from './Group.js'
import Manga from './Manga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLList: List,
  GraphQLNonNull: NonNull
} = GraphQL

export default new ObjectType({
  name: 'ChapterExtended',
  description: 'Manga chapter extended object.',
  interfaces: [ResponseInterface],
  fields: {
    id: { type: new NonNull(IntType) },
    title: { type: StringType },
    chapter: { type: StringType },
    hash: { type: StringType },
    volume: { type: StringType },
    lang_code: { type: StringType },
    lang_name: { type: StringType },
    manga_id: { type: IntType },
    manga: {
      type: Manga,
      async resolve (chapter) {
        const { manga } = await client.getManga(chapter.manga_id, true)
        return manga
      }
    },
    group_id: { type: IntType },
    group: {
      type: Group,
      async resolve (chapter) {
        if (chapter.group_id) {
          return client.getGroup(chapter.group_id)
        }
        return null
      }
    },
    group_id_2: { type: IntType },
    group_2: {
      type: Group,
      async resolve (chapter) {
        if (chapter.group_id_2) {
          return client.getGroup(chapter.group_id_2)
        }
        return null
      }
    },
    group_id_3: { type: IntType },
    group_3: {
      type: Group,
      async resolve (chapter) {
        if (chapter.group_id_3) {
          return client.getGroup(chapter.group_id_3)
        }
        return null
      }
    },
    comments: { type: IntType },
    external: { type: StringType },
    server: { type: StringType },
    page_array: { type: new List(StringType) },
    long_strip: { type: IntType },
    timestamp: { type: IntType },
    status: { type: StringType }
  }
})
