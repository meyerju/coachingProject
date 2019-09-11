import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { fetchMovies } from './services/movies';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export const movieItem = ({item}: {item: MovieItem}) => <Text style={styles.item}>{item.title}</Text>;

function App () {
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
          <Text style={styles.title}>The best {count} movieeees</Text>
        </View>
    
        <ScrollView style={styles.items_container}>
          {
            movies && movies.map(movie => 
              <View key={movie.id} style={styles.item_container}>
                <Text style={styles.item}>{movie.title}</Text>
                {/* <Icon name="star" size={30} color="grey" /> */}
              </View> 
            )
          }
        </ScrollView>
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  app: App,
  test: App,
}, {});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title_container: {
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
  items_container:{
    flex:1,
  },
  item_container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
});
