const fetch = require('node-fetch');

export const fetchMovies = () => {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);
        return responseJson.movies;
      })
      .catch((error) =>{
        console.error(error);
        return;
      });
}