// Part 1: Mastering JavaScript Basics
// Variables and data types
let tasks = []; // Array to store tasks
const maxTasks = 10; // Constant for maximum tasks
let showCompleted = true; // Boolean to toggle completed tasks visibility

// Function to check if task input is valid
function isValidTask(taskText) {
    if (typeof taskText !== 'string' || taskText.trim() === '') {
        console.log('Invalid input: Task cannot be empty');
        return false;
    }
    return true;
}

// Part 2: JavaScript Functions
// Function to add a new task
function addTask(taskText) {
    if (!isValidTask(taskText)) return;
    
    const task = {
        id: Date.now(), // Unique ID using timestamp
        text: taskText.trim(),
        completed: false
    };
    
    // Conditional: Check if maximum tasks reached
    if (tasks.length >= maxTasks) {
        console.log('Maximum tasks reached!');
        alert('Maximum tasks reached! Clear some tasks to add more.');
        return;
    }
    
    tasks.push(task);
    renderTasks();
    console.log(`Task added: ${task.text}`);
}

// Function to toggle task completion
function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

// Part 3: JavaScript Loops
// Function to render tasks using a forEach loop
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing list
    
    tasks.forEach(task => {
        if (!task.completed || showCompleted) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                <button onclick="toggleTaskCompletion(${task.id})">
                    ${task.completed ? 'Undo' : 'Complete'}
                </button>
            `;
            taskList.appendChild(li);
        }
    });
    
    // Example of while loop: Log tasks count
    let count = 0;
    while (count < tasks.length) {
        console.log(`Task ${count + 1}: ${tasks[count].text}`);
        count++;
    }
}

// Function to clear all tasks using a for loop
function clearAllTasks() {
    for (let i = tasks.length - 1; i >= 0; i--) {
        tasks.pop();
    }
    renderTasks();
    console.log('All tasks cleared');
}

// Part 4: Mastering the DOM
// DOM Element selections
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearTasksBtn = document.getElementById('clearTasksBtn');
const toggleCompletedBtn = document.getElementById('toggleCompletedBtn');

// Event listener for adding tasks
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    addTask(taskText);
    taskInput.value = ''; // Clear input after adding
});

// Event listener for clearing tasks
clearTasksBtn.addEventListener('click', () => {
    clearAllTasks();
});

// Event listener for toggling completed tasks visibility
toggleCompletedBtn.addEventListener('click', () => {
    showCompleted = !showCompleted;
    toggleCompletedBtn.textContent = showCompleted ? 'Hide Completed Tasks' : 'Show Completed Tasks';
    renderTasks();
});

// Initialize the page
renderTasks();
