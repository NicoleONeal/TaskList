export default class List {

}

constructor(data) {
    this.taskName = data.taskName
    this.tasks = data.tasks
}

getTemplate(index) {
    let template = `
    <div class="col-4 border"
    <h1>${this.taskName}</h1>
    <h4>${this.tasks}</h4>
  `;
    template += this.getTasks(index);
    template += `
    <form onsubmit="">
     < div class = "input-group mb-3" >
         <input
            type = "text"
             name = "taskName"
            class = "form-control"
            placeholder = "New Task"
            aria - label = "New Task"
             aria - describedby = "button-addon2"
            required/>
         <div class = "input-group-append">
         <button class = "btn btn-outline-secondary" type = "submit" id = "button-addon2">
         Add New Task </button> 
         </div> 
     </div> 
    </form>
    `


}