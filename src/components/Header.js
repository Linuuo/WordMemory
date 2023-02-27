import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Header2</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'darkslateblue',
    padding: 15,
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    
  },
});
export default Header;
