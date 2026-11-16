import { Member } from './member.js';

export class Main {
    constructor() {
        this.members = [];
        this.container = document.querySelector('#member-list');
        this.departmentFilter = document.querySelector('#department-filter');
        this.init();
    }

    async init() {
        await this.loadMembers();
        this.fillDepartmentFilter();
        this.addEvents();
        this.render(this.members);
    }

    async loadMembers() {
        try {
            const response = await fetch('./data/team.json');
            const data = await response.json();
            this.members = data.map((memberData) => new Member(memberData));
        } catch (error) {
            console.error('Error loading team members:', error);
            this.container.textContent = 'Team members could not be loaded.';
        }
    }

    fillDepartmentFilter() {
        const departments = [];

        this.members.forEach((member) => {
            if (!departments.includes(member.department)) {
                departments.push(member.department);
            }
        });

        departments.forEach((department) => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            this.departmentFilter.appendChild(option);
        });
    }

    addEvents() {
        this.departmentFilter.addEventListener('change', () => {
            const selectedDepartment = this.departmentFilter.value;

            if (selectedDepartment === 'all') {
                this.render(this.members);
            } else {
                const filteredMembers = this.members.filter(
                    (member) => member.department === selectedDepartment
                );
                this.render(filteredMembers);
            }
        });
    }

    render(members) {
        this.container.innerHTML = '';
        members.forEach((member) => {
            this.container.appendChild(member.render());
        });
    }
}
