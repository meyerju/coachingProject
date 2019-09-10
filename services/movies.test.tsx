import { fetchMovies } from './movies';

window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
  { json: () => ({movies: [{title:"Hello"}]})}
));

test('5 movies are displayed', async () => {
    const movies = await fetchMovies();
    expect(movies).toEqual([{title:'Hello'}]);
  });  