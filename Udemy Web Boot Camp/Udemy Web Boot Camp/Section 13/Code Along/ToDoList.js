var todos = ["I like turtles"];
window.setTimeout(function() {
    var input = prompt("What would you like to do?");
    while (input !== "quit") {
        if (input === "list") {
            listTodos();
        }
        else if (input === "new") {
            addTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
        input = prompt("What would you like to do?");
    }
}, 400);

function listTodos()
{
    todos.forEach(function(todo, index) {
        console.log("*****");
        console.log(index + " : " + todo);
        console.log("*****");
    });
}

function addTodo() {
    var newTodDo = prompt("Enter new todoL");
    todos.push(newTodDo);
    console.log("Added");
}

function deleteTodo()
{
    var index = prompt("Enter index of todo to delete ");
    todos.splice(index, 1);
    console.log("deleted");
}