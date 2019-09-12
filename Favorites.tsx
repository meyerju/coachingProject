import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  movies: MovieItem[]
}

function Favorites (props: Props) {
  console.log(props.movies);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Favorites movies</Text>
      </View>

      <ScrollView style={styles.itemsContainer}>
      {
         props.movies && props.movies.map(movie => 
          <View key={movie.id} style={styles.itemContainer}>
              <Text style={[styles.item]}>{movie.title}</Text>
              <Ionicons name={'ios-star'} size={45} color={'#0FD791'} />
          </View>)
        }
      </ScrollView>
  </View>
  )
}

const mapStateToProps = state => {
  return{
    movies: state.red.favoriteMovies
  }
}

export default connect(mapStateToProps)(Favorites);

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
  },
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
  }
});
