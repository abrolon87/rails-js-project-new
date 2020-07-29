class Problem { 
  static problems = []
  constructor(probObj) {
    this.body = probObj.body 
    this.date = probObj.date
    this.life_aspect = probObj.life_aspect
    this.id = probObj.id
    Problem.problems.push(this)
  }
  
  static getProblems() {
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

  render() {
    return `
        <li id="problemLi-${this.id}">
          <a href="#" data-id="${this.id}">${this.life_aspect.name} - ${this.body}</a>
          <ol id="problems-list"> 
            
          </ol>
        </li>
      
      `
  }
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