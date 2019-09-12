import { combineReducers, Action, AnyAction } from "redux";

interface State {
    favoriteMovies: string[]
}

const initialState = {
    favoriteMovies:[]
};

const chooseFavorite = (state: State, action: AnyAction) => {
    const eltId = action.eltId;
    const id = state.favoriteMovies.indexOf(eltId);
    let newFavoriteMovies = state.favoriteMovies.slice();
    if(id === -1){
        newFavoriteMovies.push(eltId);
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
    reducer
});