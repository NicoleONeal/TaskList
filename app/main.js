import ListController from "./Controllers/listController.js";

//NOTE This should be good to go
class App {
    constructor() {
        this.controllers = {
            listController: new ListController()
        }
    }
}

window['app'] = new App()