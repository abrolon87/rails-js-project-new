class Problems {
  constructor() {
    this.problems = []
    this.adapter = new ProblemsAdapter()
    this.problemsContainer = document.getElementById('problems-container')
    this.selectProblem = document.getElementById('li')
    this.bindEventListeners()
    this.fetchAndLoadProblems()
  }

  bindEventListeners() {

  }

  fetchAndLoadProblems() {
    this.adapter
    .getProblems()
    .then(problems => {
      problems.forEach(problem => this.problems.push(new Problem(problem)))
    })
    .then(() => {
      this.render()
    })
  }

  render() {
    console.log(this.problems)
    this.problemsContainer.innerHTML = this.problems.map(problem => problem.renderLi()).join('')
  }
}