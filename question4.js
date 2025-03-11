let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function viewTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    let task = tasks.find(t => t.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

console.log("Adding Tasks...");
addTask(1, "Training", "Pingpong");
addTask(2, "Take a rest", "Sleep");

console.log("\nViewing Tasks:");
console.log(viewTasks());

console.log("\nUpdating Task 1...");
updateTask(1, "Train pingpong", "Enjoy the game");

console.log("\nViewing Tasks After Update:");
console.log(viewTasks());

console.log("\nDeleting Task 2...");
deleteTask(2);

console.log("\nViewing Tasks After Deletion:");
console.log(viewTasks());
