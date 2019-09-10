import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { fetchMovies } from './services/movies';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface MovieItem {
  title: string;
  id: string
} 

export const movieItem = ({item}: {item: MovieItem}) => <Text style={styles.item}>{item.title}</Text>;

export default function App () {
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
        <View style={styles.title_container}>
          <Text style={styles.title}>The best {count} movies</Text>
          <Icon name="rocket" size={30} color="#900" />
        </View>
    
        <ScrollView style={styles.item_container}>
          {
            movies && movies.map(movie =>  <Text key={movie.id} style={styles.item}>{movie.title}</Text>)
          }
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title_container: {
    backgroundColor: '#332E33',
    height: 100,
    justifyContent: "flex-end",
    paddingBottom: 20,
    padding: 10,
  },
  title: {
    fontSize: 25,
    color: "white"    
  },
  item_container:{
    flex:1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
