import listController from "./Controllers/listController.js";

class App {
    constructor() {
        this.controllers = {
            listController: new listController()
        }
    }
}

window['app'] = new App();