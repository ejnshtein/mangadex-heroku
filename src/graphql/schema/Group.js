import GraphQL from 'graphql'
import { GroupInterface } from '../interface/GroupInterface.js'
import { GroupUser } from './GroupUser.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLNonNull: NonNullType,
  GraphQLInt: IntType,
  GraphQLBoolean: BooleanType,
  GraphQLList: ListType
} = GraphQL

export const Group = new ObjectType({
  name: 'Group',
  description: 'Group object',
  interfaces: [GroupInterface],
  fields: {
    id: { type: new NonNullType(IntType) },
    name: { type: StringType },
    altNames: { type: StringType },
    banner: { type: StringType },
    chapters: { type: IntType },
    delay: { type: IntType },
    description: { type: StringType },
    discord: { type: StringType },
    email: { type: StringType },
    follows: { type: IntType },
    founded: { type: StringType },
    ircChannel: { type: StringType },
    ircServer: { type: StringType },
    isInactive: { type: BooleanType },
    isLocked: { type: BooleanType },
    language: { type: StringType },
    lastUpdated: { type: IntType },
    leader: { type: GroupUser },
    likes: { type: IntType },
    members: { type: new ListType(GroupUser) },
    threadId: { type: IntType },
    threadPosts: { type: IntType },
    views: { type: IntType },
    website: { type: StringType }
  }
})
