import { combineReducers, Action, AnyAction } from "redux";

interface State {
    favoriteMovies: MovieItem[]
}

const initialState = {
    favoriteMovies:[]
};

const chooseFavorite = (state: State, action: AnyAction) => {
    const elt = action.elt;
    const id = state.favoriteMovies.indexOf(elt);
    let newFavoriteMovies = state.favoriteMovies.slice();
    if(id === -1){
        newFavoriteMovies.push(elt);
        return newFavoriteMovies;
    }
    newFavoriteMovies.splice(id, 1);
    return newFavoriteMovies;
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'CHOOSE_FAVORITE':  return { ...state, favoriteMovies: chooseFavorite(state, action)}
        default: return state;
    }
};

export default combineReducers({
    red: reducer
});