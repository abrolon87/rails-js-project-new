const BASE_URL = "http://localhost:3000"
const LIFE_ASPECTS_URL = `${BASE_URL}/life_aspects`
const PROBLEMS_URL = `${BASE_URL}/problems`
const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", () => loadLifeAspects())

const loadLifeAspects = () => {
  const LIFE_ASPECTS_URL = `${BASE_URL}/life_aspects`
    fetch(LIFE_ASPECTS_URL)
    .then(result => result.json())
    .then(json => {
      json.forEach(life_aspect => renderLifeAspect(life_aspect))
    })

}

const renderLifeAspect = (lifeAspectHash) => {
  const div = document.createElement("div")
  const p = document.createElement("p")
  const button = document.createElement("button")
  const ul = document.createElement("ul")

  div.setAttribute("class", "card") //creates cards
  div.setAttribute("data-id", lifeAspectHash["id"]) // .id
  //div.setAttribute("class", "card")
  p.innerHTML = lifeAspectHash.name
  button.setAttribute("data-life-aspect-id", lifeAspectHash["id"])
  button.innerHTML = "Add Problem"
  //attach event listener to button

  div.appendChild(p)
  div.appendChild(button)
  div.appendChild(ul)

  main.appendChild(div)

  lifeAspectHash.problems.forEach(problem => renderProblem(problem))
}

const renderProblem = (problem) => {
  
}
