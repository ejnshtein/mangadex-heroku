import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLFloat: FloatType
} = GraphQL

export const Rating = new ObjectType({
  name: 'Rating',
  description: 'Manga rating object.',
  fields: {
    bayesian: { type: FloatType },
    mean: { type: FloatType },
    users: { type: IntType }
  }
})
