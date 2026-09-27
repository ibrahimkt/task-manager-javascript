let tasks = [
    {
        id: 1,
        title: "Learn JavaScript",
        completed: true
    },
    {
        id: 2,
        title: "Practice Functions",
        completed: false
    },
    {
        id: 3,
        title: "Learn Arrays",
        completed: false
    }
];

console.log(tasks);

tasks.forEach(function(task) {
    console.log(task.title);
});

tasks.forEach(task => {
    console.log(task.title);
});

function showTasks() {
    tasks.forEach(task => {
        console.log(task.title);
    });
}

showTasks();

function showTasks() {
    tasks.forEach(task => {

        if (task.completed) {
            console.log(task.title + " - Completed");
        } else {
            console.log(task.title + " - Not Completed");
        }

    });
}

showTasks();

function addTask(title) {

    let newTask = {
        id: tasks.length + 1,
        title: title,
        completed: false
    };

    tasks.push(newTask);
}

addTask("Learn JavaScript Objects");

showTasks();

function getCompletedTasks() {

    return tasks.filter(task => task.completed === true);

}

console.log(getCompletedTasks());

function getPendingTasks() {

    return tasks.filter(task => task.completed === false);

}

console.log(getPendingTasks());


function findTask(id) {

    return tasks.find(task => task.id === id);

}

console.log(findTask(2));

function completeTask(id) {

    let task = tasks.find(task => task.id === id);

    if (task) {
        task.completed = true;
    }

}
completeTask(2);

showTasks();


function deleteTask(id) {

    tasks = tasks.filter(task => task.id !== id);

}

deleteTask(3);
showTasks();

function getTaskCount() {

    return tasks.length;

}

console.log("Total Tasks:", getTaskCount());
