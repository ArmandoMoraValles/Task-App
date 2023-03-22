import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HolaMundo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  texto: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
});

export default HolaMundo;