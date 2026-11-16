export class Member {
    constructor({ name, position, department, available }) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.available = available;
    }

    render() {
        const card = document.createElement('article');
        card.classList.add('member-card');

        const statusClass = this.available ? 'member-card__status--available' : 'member-card__status--busy';
        const statusText = this.available ? 'Available' : 'Not available';

        card.innerHTML = `
            <h2 class="member-card__name">${this.name}</h2>
            <p class="member-card__position">${this.position}</p>
            <p class="member-card__department">${this.department}</p>
            <span class="member-card__status ${statusClass}">${statusText}</span>
        `;

        return card;
    }
}
