import { View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/FooterStyle";
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Navigate to Restaurants")}>
          <Icon name="cutlery" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Restaurants</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Orders')}>
          <Icon name="history" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Order History</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Navigate to Accounts')}>
          <Icon name="user" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Account</Text>
      </View>
    </View>
  );
};

export default Footer;
