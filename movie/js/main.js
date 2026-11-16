import { Movie } from './movie.js';

export class Main {
    constructor() {
        this.movies = [];
        this.container = document.querySelector('#movie-list');
        this.init();
    }

    async init() {
        await this.loadMovies();
        this.render();
    }

    async loadMovies() {
        try {
            const response = await fetch('./data/movies.json');
            const data = await response.json();
            this.movies = data.map((movieData) => new Movie(movieData));
        } catch (error) {
            console.error('Error loading movies:', error);
            this.container.textContent = 'Movies could not be loaded.';
        }
    }

    render() {
        this.container.innerHTML = '';
        this.movies.forEach((movie) => {
            this.container.appendChild(movie.render());
        });
    }
}
