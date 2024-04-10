import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles/FooterStyle";
import { useNavigation, useRoute } from "@react-navigation/native";
import AuthContext from "../services/AuthContext";
const Footer = () => {
  const navigation = useNavigation();
  const { userType } = useContext(AuthContext);
  const route = useRoute();

  return (
    <View style={styles.container}>
  {userType === 'customer' && (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
    style={[styles.button, route.name === 'Restaurants' && styles.activeButton]}
    onPress={() => navigation.navigate('Restaurants')}
  >
    <Icon name="cutlery" size={30} color="#000" />
  </TouchableOpacity>
      <Text style={styles.buttonText}>Restaurants</Text>
    </View>
  )}

  {userType === 'customer' && (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
    style={[styles.button, route.name === 'Orders' && styles.activeButton]}
    onPress={() => navigation.navigate('Orders')}
  >
    <Icon name="history" size={30} color="#000" />
  </TouchableOpacity>
      <Text style={styles.buttonText}>Order History</Text>
    </View>
  )}

  {userType === 'courier' && (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
    style={[styles.button, route.name === 'CourierDeliveries' && styles.activeButton]}
    onPress={() => navigation.navigate('CourierDeliveries')}
  >
    <Icon name="truck" size={30} color="#000" />
  </TouchableOpacity>
      <Text style={styles.buttonText}>Deliveries</Text>
    </View>
  )}

  <View style={styles.buttonContainer}>
  <TouchableOpacity
    style={[styles.button, (route.name === 'CustomerAccount' || route.name === 'CourierAccount') && styles.activeButton]}
    onPress={() => navigation.navigate(userType === 'customer' ? 'CustomerAccount' : 'CourierAccount')}
  >
    <Icon name="user" size={30} color="#000" />
  </TouchableOpacity>
    <Text style={styles.buttonText}>Account</Text>
  </View>
</View>
  );
};

export default Footer;
