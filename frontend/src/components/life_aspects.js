// class LifeAspects {
//   constructor() {
//     this.life_aspects = []
//     this.adapter = new LifeAspectsAdapter()
//     this.problemsContainer = document.getElementById('problems-container')
//     this.selectProblem = document.getElementById('li')
//     this.bindEventListeners()
//     this.fetchAndLoadLifeAspects()
//   }

//   bindEventListeners() {

//   }

//   fetchAndLoadLifeAspects() {
//     this.adapter
//     .getLifeAspects()
//     .then(life_aspects => {
//       life_aspects.forEach(life_aspect => this.life_aspects.push(life_aspect))
//     })
//     .then(() => {
//       this.render()
//     })
//   }

//   render() {
//     this.problemsContainer.innerHTML = this.life_aspects.map(life_aspect => life_aspect.renderLi()).join('') //'mynotes', console.log(this.life_aspects)//
//   }

//   renderLi() {
//     return `<li id="li">${this.name}</li>`
//   }
// }