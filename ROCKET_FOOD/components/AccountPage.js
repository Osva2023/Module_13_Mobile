import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/AccountPageStyles";
import AppLogoV2 from "../assets/AppLogoV2.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import AuthContext from "../services/AuthContext";
const AccountPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { setUserType } = useContext(AuthContext);

  const handlePress = (accountType) => {
    setUserType(accountType);
    if (accountType === 'customer') {
      navigation.navigate('Restaurants');
    } else if (accountType === 'courier') {
      navigation.navigate('CourierDeliveries');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={AppLogoV2} style={styles.logo} />
      </View>
      <Text style={styles.header}>Select Account Type</Text>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => handlePress('customer')}>
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