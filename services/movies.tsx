export const fetchMovies = () => {
    return fetch('http://localhost:3001/')
      .then((response) => {return response.json()})
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) =>{
        console.error(error);
        return;
      });
}