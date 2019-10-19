import ListService from "../Services/listService.js";

let _listService = new ListService()

function _drawLists() {
    let template = "":
        let lists = _listService.getLists;
    lists.forEach((list, i) => {
        template += list.getTemplate(i);
    });
    document.querySelector("#lists").innerHTML = template;
}

export default class ListController {
    constructor() {
        _listService.getLists();
        _drawLists();
    }
    addList(event) {
        event.preventDefault();
        let formData = event.target
        let newList = {
            name: formData.listName.value
        };
        _listService.addList(newList);
        _drawLists;
    }

    addTasks(event) {
        event.preventDefault();
        _listService.addTask(event.target.taskName.value, listIndex);
        _drawLists();
    };

    removeList(listIndex) {
        if (!window.confirm("Please Confirm Deletion of Your List")) {
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