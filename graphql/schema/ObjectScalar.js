import GraphQL from 'graphql'

const {
  GraphQLScalarType: ScalarType
} = GraphQL

export default new ScalarType({
  name: 'ObjectScalar',
  description: 'Arbitrary Object value',
  serialize: value => value,
  parseValue: value => value,
  parseLiteral: ({ value }) => value
})
