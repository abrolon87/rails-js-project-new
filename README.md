# rails-js-project-new



- finish sorting
- refactor to make use of Problem 
- when creating a new problem object, then use render method, instead duplicate code.

function sortProblems() {
  clearPage()
  
  Problem.problems.sort(function(x, y) {
    let probx = x.body.toUpperCase();
    let proby = y.body.toUpperCase();
    if (probx < proby) {
      return -1;
    }
    if (probx > proby) {
      return 1;
    }
    return 0
  },
  Problem.problems.forEach(problem => {problem.render()})

  );
  

}  