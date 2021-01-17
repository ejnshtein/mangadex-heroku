import { ChapterMethods } from '../methods/ChapterMethods.js'
import GraphQL from 'graphql'
import { GroupMethods } from '../methods/GroupMethods.js'
import { MangaMethods } from '../methods/MangaMethods.js'
// import { UserMethods } from '../methods/UserMethods.js'
import { MangadexMethods } from '../methods/MangadexMethods.js'
import { TagMethods } from '../methods/TagMethods.js'

const { GraphQLObjectType: ObjectType } = GraphQL

export const Query = new ObjectType({
  name: 'Query',
  fields: () => ({
    ...MangaMethods,
    ...ChapterMethods,
    ...GroupMethods,
    // ...UserMethods,
    ...TagMethods,
    ...MangadexMethods
  })
})
