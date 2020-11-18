import GraphQL from 'graphql'

const { GraphQLObjectType: ObjectType, GraphQLString: StringType } = GraphQL

export const Cover = new ObjectType({
  name: 'Cover',
  fields: {
    url: { type: StringType },
    volume: { type: StringType }
  }
})
