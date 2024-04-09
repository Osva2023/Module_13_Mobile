import React from "react";
import { View, Text,  Image,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/AccountPageStyles";
import AppLogoV2 from "../assets/AppLogoV2.png";
import { useNavigation } from "@react-navigation/native";
const AccountPage = () => {
    const navigation = useNavigation();
  const handlePress = (accountType) => {
    if (accountType === 'user') {
        navigation.navigate('Restaurants');
      } else if (accountType === 'courier') {
        console.log("Navigate to Couriers Account Page");
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Aquí puedes agregar tu imagen de logo */}
        <Image source={AppLogoV2} style={styles.logo} />
      </View>
      <Text style={styles.header}>Select Account Type</Text>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('user')}>
          <Icon name="user" size={50} color="rgba(218, 88, 59, 1)" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('courier')}>
          <Icon name="truck" size={50} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountPage;