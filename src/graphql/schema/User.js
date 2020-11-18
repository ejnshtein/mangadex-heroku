import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLNonNull: NonNull,
  GraphQLBoolean: BooleanType
} = GraphQL

export const User = new ObjectType({
  name: 'User',
  description: 'User object',
  fields: {
    avatar: { type: StringType },
    biography: { type: StringType },
    id: { type: new NonNull(IntType) },
    joined: { type: IntType },
    lastSeen: { type: IntType },
    levelId: { type: IntType },
    mdAtHome: { type: IntType },
    premium: { type: BooleanType },
    uploads: { type: IntType },
    username: { type: StringType },
    views: { type: IntType },
    website: { type: StringType }
  }
})
