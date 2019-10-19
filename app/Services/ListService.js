import List from "../Models/list.js";

let _state = {
    lists: []
}

export default class listService {
    removeTask(listIndex, taskIndex) {
        _state.lists[listIndex].tasks.splice(taskIndex, 1);
        this.saveLists();
    }
    removeList(listIndex) {
        _state.lists.splice(listIndex, 1);
        this.saveLists();
    }

    addTask(task, listIndex) {
        _state.lists[listIndex.tasks.push(task)];
        this.saveLists();
    }

    addList(newList) {
        _state.lists.push(new List(newList));
        this.saveLists();
    }

    constructor() {
        console.log("testing list service");
        this.loadLists();
    }

    get Lists() {
        return _state.lists.map(L => new List(L));
    }

    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    loadLists() {
        let savedLists = JSON.parse(localStorage.getItem("lists"))
        if (savedLists) {
            _state.lists = savedLists;
        }
    }
}