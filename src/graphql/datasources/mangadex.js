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
  initialize(config) {
    this.context = config.context
  }

  async getChapter({ chapterId }) {
    return client.chapter.getChapter(chapterId)
  }

  async getManga({ mangaId }) {
    return client.manga.getManga(mangaId)
  }

  async getMangaChapters({ mangaId }) {
    return client.manga.getMangaChapters(mangaId)
  }

  async getMangaCovers({ mangaId }) {
    return client.manga.getMangaCovers(mangaId)
  }

  async getGroup({ groupId }) {
    return client.group.getGroup(groupId)
  }

  async getGroupChapters({ groupId }) {
    return client.group.getGroupChapters(groupId)
  }

  async getUser({ userId }) {
    return client.user.getUser(userId)
  }

  async getUserChapters({ userId }) {
    return client.user.getUserChapters(userId)
  }

  async getUserManga({ userId, mangaId }) {
    return client.user.getUserManga(userId, mangaId)
  }

  async getTags() {
    return client.tag.getTags()
  }

  async getTag({ tagId }) {
    return client.tag.getTag(tagId)
  }

  async getHome() {
    return client.getHome()
  }

  async getFollows() {
    return client.getFollows()
  }

  async getRelations() {
    return client.getRelations()
  }
}
