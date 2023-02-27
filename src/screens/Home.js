import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation'; // 1.0.0-beta.14
import Task from '../components/Task';

const Home = () => {
  const words = [
    {
      index: 1,
      word: 'English',
    },
    {
      index: 2,
      word: 'Chinese',
    },
    {
      index: 3,
      word: 'English',
    },
    {
      index: 4,
      word: 'English',
    },
    {
      index: 5,
      word: 'English',
    },
    {
      index: 6,
      word: 'English',
    },
    {
      index: 7,
      word: 'English',
    },
    {
      index: 8,
      word: 'English',
    },
    {
      index: 9,
      word: 'English',
    },
  ];
  return (
    <View>
      <FlatList
        style={styles.listStyle}
        keyExtractor={key => {
          return key.index;
        }}
        showsHorizontalScrollIndicator={false}
        data={words}
        renderItem={({item}) => {
          console.log(item.word);
          return <Task></Task>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: 'blue',
    margin: 20,
    color: 'white',
  },
  listStyle: {
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
});

export default Home;
