# ToDoList
This website was a work which i wanted to practice more my skill with JS. I used for firsttime React.JS and i put all of this thnigs on this project. It's possible to interect by filling out the form. 


## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [Building your project](#Building-your-project)


## Overview

### The challenge
The users should be able to:
- Add tasks it need to do.
- It's possible to mark the task as done.
- The completed task has a line across the word.
- Button change the theme color of the website.
- View the optimal layout depending on their device's screen size.

### Screenshot
- ![image](https://user-images.githubusercontent.com/117602073/234730798-ccbf8253-407d-40ab-9eff-9f7a7f1ed306.png)


### Links
- https://to-do-list-helcioanicio.vercel.app/


## My process

### Built with
- Semantic HTML5
- SASS
- SASS scops and variables.
- Flexbox
- JavaScript
- Conditional
- Metods
- Classes
- Functions
- Object Oriented Programming

### What I learned
I learned how to create a button with validation, if it's empty, the progress won't go further, from there how to add it in HTML already styled with classes and also, everything done with OOP methods and classes.
```JS
addTask.addEventListener('click', () => {
    const task = new Task(inputToIncludeTask);
    if (!inputToIncludeTask.value > '') {
        task.emptyField();
    } else {
        taskField.appendChild(task.taskEl);
        inputToIncludeTask.value = "";
    }
});
```

### Continued development
I will be working on improving my programming logic, and also OOP.
I want to practice more my skills with JS Vanilla and then go up my knowledge and improve my projects.

### Useful resources
This resource helped me a lot to understand how to do to implemented JS.
https://www.w3schools.com/
https://developer.mozilla.org/en-US/
https://stackoverflow.com/


## Author
- Linkedin - https://www.linkedin.com/in/helcio-anicio/ 
- Vercel - https://vercel.com/helcioanicio

<!--
## Acknowledgments
 -->