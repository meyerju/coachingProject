import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { fetchMovies } from './services/movies';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Favorites from "./Favorites";

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
          <Text style={styles.title}>The best {count} movies</Text>
        </View>
    
        <ScrollView style={styles.items_container}>
          {
            movies && movies.map(movie => 
              <View key={movie.id} style={styles.item_container}>
                <Text style={styles.item}>{movie.title}</Text>
                <Ionicons name="ios-star-outline" size={32} color="#332E33" />
              </View> 
            )
          }
        </ScrollView>
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  home:{
    screen: App,
    navigationOptions: {
      tabBarLabel:() => {},  
      tabBarIcon: ({ focused }) => {
            const colorIcon = focused ? '#0FD791':'#332E33';
            const iconName = 'ios-home';
            return <Ionicons name={iconName} size={40} color={colorIcon} />;
        },
    },
  },
  favorites:{
    screen: Favorites,
    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        const colorIcon = focused ? '#0FD791':'#332E33';
        const iconName = 'ios-star';
        return <Ionicons name={iconName} size={40} color={colorIcon} />;
    },
      tabBarLabel:() => {},  
    },
  },
},{});

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
