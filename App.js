import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header/Header.js'
import Container from './AppNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  }
});
