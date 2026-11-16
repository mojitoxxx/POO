import { Task } from './task.js';

export class Main {
    constructor() {
        this.tasks = [];
        this.container = document.querySelector('#task-list');
        this.init();
    }

    async init() {
        await this.loadTasks();
        this.render();
    }

    async loadTasks() {
        try {
            const response = await fetch('./data/tasks.json');
            const data = await response.json();
            this.tasks = data.map((taskData) => new Task(taskData));
        } catch (error) {
            console.error('Error loading tasks:', error);
            this.container.textContent = 'Tasks could not be loaded.';
        }
    }

    render() {
        this.container.innerHTML = '';
        this.tasks.forEach((task) => {
            this.container.appendChild(task.render());
        });
    }
}
