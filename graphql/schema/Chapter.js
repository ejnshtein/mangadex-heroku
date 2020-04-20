import GraphQL from 'graphql'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType,
  GraphQLNonNull: NonNull
} = GraphQL

export default new ObjectType({
  name: 'Chapter',
  description: 'Manga chapter object.',
  fields: {
    id: { type: new NonNull(IntType) },
    title: { type: StringType },
    chapter: { type: StringType },
    volume: { type: StringType },
    lang_code: { type: StringType },
    group_id: { type: IntType },
    group_name: { type: StringType },
    group_id_2: { type: IntType },
    group_name_2: { type: StringType },
    group_id_3: { type: IntType },
    group_name_3: { type: StringType },
    timestamp: { type: IntType }
  }
})
