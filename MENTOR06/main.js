function addTask(event) {
    event.preventDefault();

    const taskInput = document.querySelector(".input");
    const todoList = document.getElementById("TODO-List");

    if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        
        const deleteButton = document.createElement("button");
        deleteButton.classList = ("delete-btn");
        deleteButton.textContent = "Delete";
        li.appendChild(deleteButton); 
        
        deleteButton.addEventListener("click", () => {
            li.remove();
        });

        todoList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Deyer Daxil Et!!!");
    }
}

document.querySelector("form").addEventListener("submit", addTask);