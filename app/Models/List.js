export default class List {
    getTasks(listIndex) {
        let template = "<ul>";
        this.tasks.forEach((T, i) => {
            template += `
            <li> ${T} <span class="text-danger" onclick="app.listController.removeTask(${listIndex}, ${i}">X)</span></li>`;
        });
        template += "</ul>";
        return template;
    }

    constructor(data) {
        this.listName = data.listName
        this.tasks = data.tasks
    }

    getTemplate(index) {
        let template = `
        <div class="col-4 border"
        <h1>${this.listName}</h1>
        <h4>Tasks:</h4>
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
            <button class = "btn btn-secondary" type = "submit" id = "button-addon2">
            Add New Task </button> 
            </div> 
        </div> 
        </form>
        `;
        template += `
        <div class="btn-group" role="group" aria - label = "Basic example" >
          <button type = "button" class = "btn btn-info onclick="app.listController.removeList(${index})">Delete To-Do List</button> 
          <button type = "button" class = "btn btn-info onclick="app.listController.moveListToDo(${index})"> Move to To-Do</button> 
          <button type = "button" class = "btn btn-info onclick="app.listController.moveListComplete(${index})"> Move to Complete </button> 
        </div>
            `;
        return template;
    }


}