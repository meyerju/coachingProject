import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { fetchMovies } from './services/movies';
import { Ionicons } from '@expo/vector-icons';

import Favorites from "./Favorites";
import FavoriteIcon from "./FavoriteIcon";

import store from './store';

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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The best {count} movies</Text>
        </View>
    
        <ScrollView style={styles.itemsContainer}>
          {
            movies && movies.map(movie => <FavoriteIcon key={movie.id} title={movie.title}/>)
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

const Navigator = createAppContainer(TabNavigator);

export default class Nav extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
} ;

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
