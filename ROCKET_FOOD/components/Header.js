import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/AppLogoV2.png')} // Asegúrate de tener tu logo en la carpeta assets
        style={styles.logo}
      />
      {/* Botón de Logout */}
      <Button title="Logout" onPress={() => console.log('Logout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff', // Estilo opcional para el fondo del header
  },
  logo: {
    width: 100,
    height: 50,
  },
});

export default Header;
