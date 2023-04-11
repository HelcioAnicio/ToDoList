const inputToIncludeTask = document.querySelector('.toIncludeTask');
const addTask = document.querySelector('.addTask')
const taskField = document.querySelector('.tasks')
const taskAdded = document.querySelectorAll('.task')
const buttonDone = document.querySelectorAll('.done')
const buttonDelete = document.querySelectorAll('.delete')

class Task {
    constructor (inputToIncludeTask, addTask) {
        this.inputToIncludeTask = inputToIncludeTask;
        this.addTask = addTask;
    }

    addTaskOnTaskField () {
        taskField.innerHTML += `
            <div class="task">
                <p>${this.inputToIncludeTask.value}</p>
                <div class="buttons">
                    <button type="button" class="done">
                        <i class='fa fa-check-circle'></i>
                    </button>
                    <button type="button" class="delete">
                        <i class='fa-solid fa-circle-xmark'></i>
                    </button>
                </div>
            </div>
        `;
    }

    clean () {
        this.inputToIncludeTask.value = '';
        
    }

    removeTask (e) {
        // taskField.removeChild(taskAdded);
        let task = this.parentNode;
        task.parentNode.removeChild(taskAdded);
    }
}


const task = new Task (
    inputToIncludeTask,
    addTask
);

addTask.addEventListener('click', () => {
    task.addTaskOnTaskField();
    task.clean();
});

// buttonDelete.addEventListener('click', () => {
//     task.removeTask()
// })

buttonDelete.forEach((Button)=>{
    Button.addEventListener('click', () => {
        task.removeTask();
    });   
});
