import AD from 'apollo-datasource'
import { client } from '../../client.js'
const { DataSource } = AD

export class Mangadex extends DataSource {
  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize (config) {
    this.context = config.context
  }

  async getManga ({ id }) {
    return client.getManga(id, true)
  }

  async getChapter ({ id }) {
    return client.getChapter(id, true)
  }

  async getGroup ({ id }) {
    return client.getGroup(id)
  }

  async getUser ({ id }) {
    return client.getUser(id)
  }

  async getHome () {
    return client.getHome()
  }
}
