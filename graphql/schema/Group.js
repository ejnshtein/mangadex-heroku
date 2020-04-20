import GraphQL from 'graphql'
import GroupStats from './GroupStats.js'
import ObjectScalar from './ObjectScalar.js'
import User from './User.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLList: List
} = GraphQL

export default new ObjectType({
  name: 'Group',
  description: 'Group object.',
  fields: {
    name: { type: StringType },
    banner: { type: StringType },
    stats: { type: GroupStats },
    description: { type: StringType },
    links: { type: ObjectScalar },
    leader: { type: User },
    members: { type: new List(User) },
    upload_restrictions: { type: StringType }
  }
})
