/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, TextInput, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';

// const HomeScreen = () => (
//   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     <Text>Home Screen</Text>
//   </View>
// );

// const DetailsScreen = () => (
//   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//     <Text>Details Screen</Text>
//   </View>
// );
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}></Button>
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    height: 50,
  },
  container: {
    flex: 1,
    paddingTop: 60,
  },
  text: {
    color: 'blue',
    fontSize: 30,
  },
});

export default App;
