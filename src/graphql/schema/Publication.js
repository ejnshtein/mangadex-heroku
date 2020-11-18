import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const Publication = new ObjectType({
  name: 'Publication',
  description: 'Manga publication object.',
  fields: {
    demographic: { type: IntType },
    language: { type: StringType },
    status: { type: IntType },

    languageName: { type: StringType }
  }
})
