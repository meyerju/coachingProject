import { fetchMovies } from './movies';

test('5 movies are displayed', async () => {
    const movies = await fetchMovies();
    expect(movies.length).toBe(5);
    expect(movies[0].title).toBe('Star Wars')
});  