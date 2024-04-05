import React, { useContext,useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import AppLogoV2 from "../assets/AppLogoV2.png";
import styles from "../styles/LoginStyle";
import handleLogin from "../services/handleLogin";
import AuthContext from "../services/AuthContext";

const Login = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* Aquí puedes agregar tu imagen de logo */}
        <Image source={AppLogoV2} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Welcome to Rocket Foods</Text>
        <Text style={styles.subHeader}>Login to Begin</Text>
        <TextInput
  style={styles.input}
  placeholder="Email"
  keyboardType="email-address"
  autoCapitalize="none"
  onChangeText={text => setEmail(text)}
  value={email}
/>
<TextInput
  style={styles.input}
  placeholder="Password"
  secureTextEntry={true}
  onChangeText={text => setPassword(text)}
  value={password}
/>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgba(218, 88, 59, 1)' }]}
          onPress={() => handleLogin(email, password, navigation, setUser)}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
