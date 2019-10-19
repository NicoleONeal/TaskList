import ListService from "../Services/listService.js";

let _listService = new ListService()

function _drawLists() {
    let template = "";
    let lists = _listService.Lists;
    lists.forEach((list, i) => {
        template += list.getTemplate(i);
    });
    document.querySelector("#lists").innerHTML = template;
}

export default class listController {
    constructor() {
        console.log("testing list controller");
        _drawLists();
    }

    addList(event) {
        console.log('addList called', event);
        event.preventDefault();
        let formData = event.target
        let newList = {
            listName: formData.listName.value
        };
        console.log(newList);
        _listService.addList(newList);
        _drawLists();
    }

    addTask(event, listIndex) {
        console.log('addTask called', event, listIndex);
        event.preventDefault();
        _listService.addTask(event.target.taskName.value, listIndex);
        _drawLists();
    }

    removeList(listIndex) {
        console.log('remove called', listIndex);
        if (!window.confirm("Please Confirm Deletion of Your To-Do List")) {
            return;
        }
        _listService.removeList(listIndex);
        _drawLists();
    }

    removeTask(listIndex, taskIndex) {
        _listService.removeTask(listIndex, taskIndex);
        _drawLists();
    }

}