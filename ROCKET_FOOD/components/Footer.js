import { View, TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/FooterStyle";

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Navigate to Restaurants")}>
          <Icon name="cutlery" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Restaurants</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Navigate to Order History")}>
          <Icon name="history" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.buttonText}>Order History</Text>
      </View>
    </View>
  );
};

export default Footer;
