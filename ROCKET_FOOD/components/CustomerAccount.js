import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomerAccount = () => {
  const handleUpdate = (accountType) => {
    // Handle the press event
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>My Account</Text>
      <Text style={styles.subHeader}>Logged in as: Customer</Text>
      <View style={styles.formContainer}>
      <TextInput
  style={styles.input}
  placeholder="Primary Email"
  keyboardType="primary-email-address"
  autoCapitalize="none"
  onChangeText={text => setPrimaryEmail(text)}
  value={email}
/>
<TextInput
  style={styles.input}
  placeholder="Customer Email"
  keyboardType="customer-email-address"
  autoCapitalize="none"
  onChangeText={text => setCustomerEmail(text)}
  value={customeremail}
/>
<TextInput
  style={styles.input}
  placeholder="Customer Phone"
  keyboardType="customer-phone-number"
  autoCapitalize="none"
  onChangeText={text => setCustomerPhone(text)}
  value={phone}
/>
<TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgba(218, 88, 59, 1)' }]}
          onPress={() => handleUpdate(accountType)}
        >
          <Text style={styles.buttonText}>Update Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerAccount;