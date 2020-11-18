import GraphQL from 'graphql'
import { TagInterface } from '../interface/TagInterface.js'

const {
  GraphQLObjectType: ObjectType,
  GraphQLString: StringType,
  GraphQLInt: IntType
} = GraphQL

export const PartialTag = new ObjectType({
  name: 'PartialTag',
  interfaces: [TagInterface],
  fields: {
    id: { type: IntType },
    name: { type: StringType }
  }
})
