const BASE_URL = 'http://localhost:3000'

window.addEventListener('load', () => {
  getProblems()
})

function getProblems() {
  clearForm() 
  clearPage()
  const ul = document.querySelector('#list')
  fetch(BASE_URL+"/problems")
  .then(resp => resp.json())
  .then(problems => {
      problems.forEach(problem => {
        const newProblem = new Problem(problem)

        ul.innerHTML += newProblem.render() 
      })
      
      attachClickLinks()
    })
      
}

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
  document.getElementById('problems').addEventListener('click', getProblems)

}

function displayProblem() {
  clearForm() 
  let id = event.target.dataset.id 
  clearPage()
  let show = document.querySelector('#show')
  fetch(BASE_URL+'/problems/'+id)
  .then(resp => resp.json())
  .then(problem => {
    show.innerHTML += `
      <p>${problem.body}</p>
      <p>${problem.date}</p>  
      <p>${problem.solved ? "Solved" : "On-going"}</p>  `
  })
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

function createProblem() {
  event.preventDefault()
  let sel = document.querySelector('#life-aspect-dropdown')
  const problem = {
    life_aspect_id: sel.options[sel.selectedIndex].value,
    date: document.querySelector('#date').value,
    body: document.getElementById('problem-body').value,
    solved: document.getElementById('solved').checked
  }

  fetch(BASE_URL+'/problems', {
    method: "POST",
    body: JSON.stringify(problem),
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(problem => {
    let ul = document.querySelector('#main ul') 
    ul.innerHTML += `
    <li id="problemLi-${problem.id}">
          <a href="#" data-id="${problem.id}">${problem.life_aspect.name} - ${problem.body}</a>
          <ol id="problems-list"> 
            
          </ol>
        </li>
    `
    attachClickLinks()
    clearForm()
  })
}


