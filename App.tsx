import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {
  state= {
    movies: null
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          movies: responseJson.movies,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.title}>The best movies</Text>
        </View>
      
      <FlatList
      style={styles.movies}
          data={this.state.movies}
          renderItem={({item}: any) => <Text style={styles.item}>{item.title}</Text>}
          keyExtractor={({id}, index) => id}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  movies: {
    
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
