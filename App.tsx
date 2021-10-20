import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'rgba(0, 0, 0, 0.2)'}
        showHideTransition={'slide'}
        translucent={true}
      />
      <MainNavigator />
    </NavigationContainer>
  );
}
