const check = document.querySelector('.check');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const iconAddTask = document.querySelector('.fa');

const inputToIncludeTask = document.querySelector('.toIncludeTask');
const addTask = document.querySelector('.addTask')
const taskField = document.querySelector('.tasks')
const taskAdded = document.querySelectorAll('.task')
const buttonDone = document.querySelectorAll('.done')
const buttonDelete = document.querySelectorAll('.delete')

check.addEventListener('click', () => {
    body.classList.toggle('bodyDark');
    container.classList.toggle('containerDark');
    title.classList.toggle('titleDark');

    iconAddTask.classList.toggle('faDark');


})

class Task {
    constructor (inputToIncludeTask) {
        this.inputToIncludeTask = inputToIncludeTask;
        this.createTaskElement();
    }

    createTaskElement() {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <p>${this.inputToIncludeTask.value}</p>
            <div class="buttons">
                <button type="button" class="done">
                    <i class='fa fa-check-circle'></i>
                </button>
                <button type="button" class="delete">
                    <i class='fa-solid fa-circle-xmark'></i>
                </button>
            </div>
        `;
        taskElement.querySelector(".delete").addEventListener("click", () => {
            taskElement.parentElement.removeChild(taskElement);
        });
        taskElement.querySelector(".done").addEventListener("click", () => {
            taskElement.querySelector("p").classList.toggle('finished')
        });
        this.taskEl = taskElement;
    }

    emptyField() {
        this.inputToIncludeTask.classList.add("error");
    }

    fullField() {
        if (this.inputToIncludeTask.value.length >= 1) {
            this.inputToIncludeTask.classList.remove("error");        
        } return
    }
}

addTask.addEventListener('click', () => {
    const task = new Task(inputToIncludeTask);
    if (!inputToIncludeTask.value > '') {
        task.emptyField();
    } else {
        taskField.appendChild(task.taskEl);
        inputToIncludeTask.value = "";
    }
});

function CheckInput(){
    const task = new Task(inputToIncludeTask);
    task.fullField();
}


