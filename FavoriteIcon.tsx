import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: string
}

export default class FavoriteIcon extends React.Component<Props> {
  state = {
    value: new Animated.Value(0),
    isFavorite: false
  };

  selectFavorite = () =>  {
    const isStartAnimation = this.state.isFavorite? 0: 1;
    Animated.timing(
      this.state.value, 
      {
        toValue: isStartAnimation,
        duration: 50 
      },
    ).start(); 
    this.setState({isFavorite: !this.state.isFavorite})
  }

  render(){
    const iconColor = this.state.isFavorite ? "#0FD791" :"#332E33";
    const iconName = 'ios-star'+(this.state.isFavorite ? "":'-outline');
    return (
      <View style={styles.itemContainer} >
        <Text style={[styles.item]}>{this.state.isFavorite}{this.props.title}</Text>
       <Animated.View
          style={{
            transform: [
              { scale: this.state.value.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.4],
              }) },
            ],
          }}
        >
          <Ionicons onPress={this.selectFavorite} name={iconName} size={32} color={iconColor} />
        </Animated.View>
      </View>
    )
  }  
}

const styles = StyleSheet.create({
  itemContainer:{
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
  },
  favorite: {
    color: "#0FD791",
    fontSize: 20
  }
});
