import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* Botones del Footer */}
      <Button title="Restaurants" onPress={() => console.log('Navigate to Restaurants')} />
      <Button title="Order History" onPress={() => console.log('Navigate to Order History')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff', // Estilo opcional para el fondo del footer
  },
});

export default Footer;
