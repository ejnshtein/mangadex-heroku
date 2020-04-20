import GraphQL from 'graphql'
import UserStats from './UserStats.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType
} = GraphQL

export default new ObjectType({
  name: 'UserExtended',
  fields: {
    username: { type: StringType },
    language: { type: StringType },
    joined: { type: StringType },
    photo_url: { type: StringType },
    stats: { type: UserStats },
    website: { type: StringType },
    last_online: { type: StringType }
  }
})
