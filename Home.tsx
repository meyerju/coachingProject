import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { fetchMovies } from './services/movies';
import { FavoriteIcon } from "./FavoriteIcon";
import { chooseFavorite } from './action';

interface Props {
  onChooseFavorite(movie: MovieItem): Promise<Action>
}

function HomeComponent (props: Props) {
    const [movies, setMovies] = useState(null);
    const [count, setCount] = useState(0);
    const selectMovie = (movie: MovieItem) => () => {props.onChooseFavorite(movie)}
    
    async function fetchData(){
      const movies = await fetchMovies();
      setMovies(movies);
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
              movies && movies.map((movie: MovieItem) => <FavoriteIcon key={movie._id} select={selectMovie(movie)} title={movie.title}/>)
            }
          </ScrollView>
      </View>
    )
  }

const mapDispatchToProps = {onChooseFavorite : chooseFavorite};

export const Home = connect(null, mapDispatchToProps)(HomeComponent);

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
  