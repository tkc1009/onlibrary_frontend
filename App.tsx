import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Single1 from './components/Single1';
import Single2 from './components/Single2';
import Stack1 from './components/Stack1';
import Stack2 from './components/Stack2';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';

const Stack = createStackNavigator(
  {
    Stack1: {screen: Stack1},
    Stack2: {screen: Stack2},
  },
  {
    initialRouteName: 'Stack1'
  }
);

const App = () => {
  const Layout = createAppContainer(Stack);
  return (
    <>
      {/* <Single1/> */}
      <Layout/>
    </>
  );
};

export default App;