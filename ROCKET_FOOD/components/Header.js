import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/HeaderStyle';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/AppLogoV2.png')} // Make sure you have your logo in the assets folder
        style={styles.logo}
      />
      {/* Logout Button */}
      <Button title="Logout" onPress={() => navigation.navigate('Login')} color={styles.button.backgroundColor}/>
    </View>
  );
};

export default Header;
