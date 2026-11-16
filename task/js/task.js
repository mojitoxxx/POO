export class Task {
    constructor({ text, category, completed }) {
        this.text = text;
        this.category = category;
        this.completed = completed;
        this.element = null;
    }

    complete() {
        this.completed = true;
        this.updateView();
    }

    updateView() {
        const button = this.element.querySelector('.task__button');

        if (this.completed) {
            this.element.classList.add('task--completed');
            button.textContent = 'Completed';
            button.disabled = true;
        }
    }

    render() {
        this.element = document.createElement('li');
        this.element.classList.add('task');

        this.element.innerHTML = `
            <div class="task__content">
                <span class="task__category">${this.category}</span>
                <p class="task__text">${this.text}</p>
            </div>
            <button class="task__button" type="button">Complete</button>
        `;

        const button = this.element.querySelector('.task__button');
        button.addEventListener('click', () => this.complete());

        this.updateView();

        return this.element;
    }
}
