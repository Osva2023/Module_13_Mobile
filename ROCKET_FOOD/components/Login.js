import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AppLogoV2 from '../assets/AppLogoV2.png';
const Login = () => {
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
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;

