import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import styles from '../styles/HeaderStyle';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/AppLogoV2.png')} // Asegúrate de tener tu logo en la carpeta assets
        style={styles.logo}
      />
      {/* Botón de Logout */}
      <Button title="Logout" onPress={() => console.log('Logout')} color={styles.button.backgroundColor}/>
    </View>
  );
};



export default Header;
