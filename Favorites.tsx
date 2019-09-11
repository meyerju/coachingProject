import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Favorites () {

  return (
    <View style={styles.container}>
    <View style={styles.title_container}>
      <Text style={styles.title}>Favorites movies</Text>
    </View>

    <ScrollView style={styles.items_container}>
      <View style={styles.item_container}>
        <Text style={styles.item}>Favorites ...</Text>
      </View>             
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