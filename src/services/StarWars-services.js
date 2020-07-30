export default class starWars {
  _apiBase = 'https://swapi.dev/api'

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`)

    if (!res.ok) {
      throw new Error(`Could not fetch ${this._apiBase}${url}`)
    }

    return await res.json()
  }

  async getAll(url) {
    const res = await this.getResource(url);
    return res.results

  }

  getItem(url, id) {
    return this.getResource(`${url}${id}/`)
  }

  async get(url) {
    const res = await fetch(url)
    return await res.json()
  }
}