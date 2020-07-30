const BASE_URL = 'http://localhost:3000'

window.addEventListener('load', () => {
  Problem.getProblems()
})

function clearForm() {
  let problemFormDiv = document.getElementById('problem-form')
  problemFormDiv.innerHTML = ""
}

function clearPage() {
  let show = document.querySelector('#show')
  show.innerHTML = ""
  const ul = document.querySelector('#list')
  ul.innerHTML = ""
}

function attachClickLinks() {
  let problems = document.querySelectorAll('li a')
  problems.forEach(problem => {
    problem.addEventListener('click', displayProblem)
  })
  document.getElementById('problemForm').addEventListener('click', displayCreateForm)
  document.getElementById('problems').addEventListener('click', Problem.getProblems)
  document.getElementById('sort').addEventListener('click', Problem.sortProblems)
}

function displayCreateForm() {
  let problemFormDiv = document.getElementById('problem-form')
  fetch(BASE_URL+`/life_aspects`)
  .then(resp => resp.json())
  .then(data => {
    let lao = ""
    data.forEach(life_aspect => {
      lao += `<option value="${life_aspect.id}">${life_aspect.name}</option>`
    })
  
  let html = `
    <form> 
      <label>Choose a Life Aspect</label>
      <select id="life-aspect-dropdown" name="life-aspect">
      ${lao}
      </select>
      
      <label>Problem: </label>
      <input type="text" id="problem-body">

      <label>When did this start?</label>
      <input type="date" id="date" name="date">

      <label> solved: </label>
      <input type="checkbox" id="solved">
      <input type="submit">
    </form>
  `

  problemFormDiv.innerHTML = html 
  document.querySelector('form').addEventListener('submit', createProblem)
  })
}




