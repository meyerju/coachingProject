import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

interface MovieItem {
  title: string;
  id: string
} 

export default function App () {
  const [state, setState] = useState({movies:null});
  
  useEffect(() => {
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        setState({
          movies: responseJson.movies,
        });
      })
      .catch((error) =>{
        console.error(error);
      });

    return;
  });
  
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>The best movies</Text>
      </View>
    
        <FlatList
          data={state.movies}
          renderItem={({item}: {item: MovieItem}) => <Text style={styles.item}>{item.title}</Text>}
          keyExtractor={({id}) => id}
        />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
