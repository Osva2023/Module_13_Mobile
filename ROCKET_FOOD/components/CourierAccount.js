import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../styles/CourierAccountStyles";

const CourierAccount = () => {
  const [primaryEmail, setPrimaryEmail] = useState("");
  const [courierEmail, setCourierEmail] = useState("");
  const [phone, setCourierPhone] = useState("");
  const accountType = "Courier"; // Replace with actual account type

  const handleUpdate = (accountType) => {
    // Handle the press event
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Account</Text>
      <Text style={styles.subHeader}>Logged in as: {accountType}</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Primary Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setPrimaryEmail}
          value={primaryEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Courier Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setCourierEmail}
          value={courierEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Courier Phone"
          keyboardType="phone-pad"
          autoCapitalize="none"
          onChangeText={setCourierPhone}
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

export default CourierAccount;