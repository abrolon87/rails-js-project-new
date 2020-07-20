class LifeAspectsAdapter {
  constructor() {
  this.baseURL = 'http://localhost:3000/life_aspects'
  }

  getLifeAspects() {
    return fetch(this.baseURL)
    .then(resp => resp.json()
    )
  }


}