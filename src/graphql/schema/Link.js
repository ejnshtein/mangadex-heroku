import GraphQL from 'graphql'

const { GraphQLObjectType: ObjectType, GraphQLString: StringType } = GraphQL

export const Link = new ObjectType({
  name: 'Link',
  fields: {
    title: { type: StringType },
    url: { type: StringType }
  }
})
