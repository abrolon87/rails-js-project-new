class Problem { 
  constructor(probObj) {
    this.body = probObj.body 
    this.date = probObj.date
    this.life_aspect = probObj.life_aspect
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