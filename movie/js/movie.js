export class Movie {
    constructor({ title, director, year, rating }) {
        this.title = title;
        this.director = director;
        this.year = year;
        this.rating = rating;
    }

    isTopRated() {
        return this.rating >= 8;
    }

    render() {
        const card = document.createElement('article');
        card.classList.add('movie-card');

        if (this.isTopRated()) {
            card.classList.add('movie-card--top');
        }

        card.innerHTML = `
            ${this.isTopRated() ? '<span class="movie-card__badge">&#9733; Top rated</span>' : ''}
            <h2 class="movie-card__title">${this.title}</h2>
            <p class="movie-card__info"><strong>Director:</strong> ${this.director}</p>
            <p class="movie-card__info"><strong>Year:</strong> ${this.year}</p>
            <p class="movie-card__rating">${this.rating}/10</p>
        `;

        return card;
    }
}
