import GraphQL from 'graphql'
import { TagInterface } from '../interface/TagInterface.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const Tag = new ObjectType({
  name: 'Tag',
  interfaces: [TagInterface],
  fields: {
    id: { type: IntType },
    name: { type: StringType },
    group: { type: StringType },
    description: { type: StringType }
  }
})
