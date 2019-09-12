import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchMovies } from './services/movies';
import FavoriteIcon from "./FavoriteIcon";
import { chooseFavorite } from './action';

interface Props {
  onChooseFavorite(eltId: number): Promise<Action>
}

function App (props: Props) {
    const [movies, setState] = useState(null);
    const [count, setCount] = useState(0);
    
    async function fetchData(){
      const movies = await fetchMovies();
      setState(movies);
      setCount(movies.length);
    }
  
    useEffect(() => {
       fetchData();
    }, []);
  
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>The best {count} movies</Text>
          </View>
      
          <ScrollView style={styles.itemsContainer}>
            {
              movies && movies.map(movie => <FavoriteIcon key={movie.id} select={() => props.onChooseFavorite(movie)} title={movie.title}/>)
            }
          </ScrollView>
      </View>
    )
  }

const mapDispatchToProps = dispatch => {
  return {
    onChooseFavorite: (elt: MovieItem) => { dispatch(chooseFavorite(elt))}
  }
}

export default connect(null, mapDispatchToProps)(App);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    titleContainer: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: '#332E33',
      height: 100,
      justifyContent: "space-between",
      alignItems: "flex-end",
      paddingBottom: 20,
      padding: 10,
    },
    title: {
      fontSize: 25,
      color: "white"    
    },
    itemsContainer:{
      flex:1,
    }
  });
  