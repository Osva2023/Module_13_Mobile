import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/CustomerAccountStyles";
import AuthContext from "../services/AuthContext";
import  fetchAccountInfo  from "../services/fetchAccountInfo";
import updateAccountInfo from "../services/updateAccountInfo";
import Layout from "../components/Layout";
const CustomerAccount = () => {
  const { user } = useContext(AuthContext);
  const { userType } = useContext(AuthContext);

  const [primaryEmail, setPrimaryEmail] = useState('');
  const [accountEmail, setAccountEmail] = useState('');
  const [accountPhone, setAccountPhone] = useState('');

  useEffect(() => {
    fetchAccountInfo(user.user_id, userType)
   .then((data) => {
     setPrimaryEmail(data.primary_email);
     setAccountEmail(data.account_email);
     setAccountPhone(data.account_phone);
   });

  }, []);
  const handleUpdate = () => {
    updateAccountInfo(user.user_id, userType, accountEmail, accountPhone)
      .then(data => {
        // Handle the response data
      })
      .catch(error => {
        // Handle the error
      });
  };

  return (
    <Layout>
    <View style={styles.container}>
      <Text style={styles.header}>My Account</Text>
      <Text style={styles.subHeader}>Logged in as: {userType}</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Primary Email"
          keyboardType="email-address"
          autoCapitalize="none"
          editable={false}
          value={primaryEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Account Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={text => setAccountEmail(text)}
          value={accountEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Account Phone"
          keyboardType="phone-pad"
          autoCapitalize="none"
          onChangeText={text => setAccountPhone(text)}
          value={accountPhone}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgba(218, 88, 59, 1)' }]}
          onPress={() => handleUpdate(userType)}
        >
          <Text style={styles.buttonText}>Update Account</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Layout>
  );
};

export default CustomerAccount;