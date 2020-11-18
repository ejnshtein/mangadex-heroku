import GraphQL from 'graphql'
import { Link } from './Link.js'
import { Publication } from './Publication.js'
import { Rating } from './Rating.js'
import { RelatedManga } from './RelatedManga.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLList: List,
  GraphQLNonNull: NonNull,
  GraphQLBoolean: BooleanType
} = GraphQL

export const Manga = new ObjectType({
  name: 'Manga',
  description: 'Manga object',
  fields: {
    altTitles: { type: new List(StringType) },
    artist: { type: new List(StringType) },
    author: { type: new List(StringType) },
    comments: { type: IntType },
    description: { type: StringType },
    follows: { type: IntType },
    id: { type: new NonNull(IntType) },
    isHentai: { type: BooleanType },
    lastChapter: { type: StringType },
    lastUploaded: { type: IntType },
    lastVolume: { type: StringType },
    links: { type: new List(Link) },
    mainCover: { type: StringType },
    publication: { type: Publication },
    rating: { type: Rating },
    relation: { type: new List(RelatedManga) },
    tags: { type: new List(IntType) },
    title: { type: StringType },
    views: { type: IntType }
  }
})
