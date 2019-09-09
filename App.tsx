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
      <Text>Hello Bam !</Text>
      <View style={styles.movies}>
      <FlatList
          data={this.state.movies}
          renderItem={({item}: any) => <Text>i{item.title}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movies: {
    backgroundColor: 'red',
    height: '20%'
  }
});
