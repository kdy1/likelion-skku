



const rawStubMovies: Movie[] = [
    {
        id: 'm1',
        title: 'The Shawshank Redemption',
        year: 1994,
        description: `Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.`,
        casts: [
            "Tim Robbins",
            "Morgan Freeman",
            "Bob Gunton"
        ],
        rating: 9.3,
        reviewCount: 100,
        provider: 'Netflix',
        similar: ['m2']
    },

    {
        id: 'm2',
        title: 'The Godfather',
        year: 1972,
        description: `The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.`,
        casts: [
            "Marlon Brando",
            "Al Pacino",
            "James Caan"
        ],
        rating: 9.2,
        reviewCount: 100,
        provider: 'Netflix',
        similar: ['m1']
    },

    {
        id: 'm3',
        title: 'The Dark Knight',
        year: 2008,
        description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
        casts: [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart"
        ],
        rating: 9.0,
        reviewCount: 100,
        provider: 'Netflix',
        similar: []
    },


];

const stubMovies = Object.fromEntries(rawStubMovies.map((movie) => [movie.id, movie]));

export interface Movie {
    id: string;
    title: string,
    year: number,
    description: string;

    casts: string[]

    rating: number;
    reviewCount: number;

    provider: string;
    similar: string[];
}

export async function getMovie(id: string): Promise<Movie> {
    const m = stubMovies[id];


    // DB인 척하기 위해 0 ~ 1초 지연
    await sleep(Math.random() * 1000);

    if (!m) {
        throw new Error(`Movie with id ${id} not found`);
    }

    return m;
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}