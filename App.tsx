import React from 'react';
import { Provider } from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';

import { Favorites } from "./Favorites";
import { Home } from "./Home";

import { store } from './store';

const TabNavigator = createBottomTabNavigator({
  home:{
    screen: Home,
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

//@ts-ignore
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
