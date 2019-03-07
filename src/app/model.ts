export class Model {
    user: string;
    items;

    constructor() {
        this.user = "Adam";
        this.items = [
            new TodoItem("Buy A", true),
            new TodoItem("Buy B", false),
            new TodoItem("Buy C", true),
            new TodoItem("Buy D", false),
        ]
    }
}

export class TodoItem {
    action: string;
    done: boolean;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}