document.addEventListener("DOMContentLoaded", function () {
    //input tag
    const taskInput = document.getElementById("task");

    //button tag
    const addTaskButton = document.getElementById("addTask")

    //ul tag
    const taskList = document.getElementById("taskList")

    //event listener for button
    addTaskButton.addEventListener("click", function () {
        //first step
        const taskText = taskInput.value

        //adding the values in the list
        const taskItem = document.createElement("li") //this is nothing but a li tag created with JS

        //we are giving the inner html value
        taskItem.innerHTML = `${taskText} <button id="delete-btn" class="delete">Delete</button>`

        //appending or adding child inside the parent
        // we are adding a new li inside the ul
        taskList.appendChild(taskItem)

        //remove functionality starts
        const deleteButton = taskItem.querySelector("#delete-btn")
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem)
        })
        //remove functionality ends

    })
})