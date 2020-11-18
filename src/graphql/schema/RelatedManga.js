import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLInt: IntType,
  GraphQLBoolean: BooleanType,
  GraphQLString: StringType,
  GraphQLNonNull: NonNull
} = GraphQL

export const RelatedManga = new ObjectType({
  name: 'RelatedManga',
  description: 'Manga related manga object.',
  fields: {
    id: { type: new NonNull(IntType) },
    isHentai: { type: BooleanType },
    title: { type: StringType },
    type: { type: IntType }
  }
})
