



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
        reviewCount: 100
    }
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