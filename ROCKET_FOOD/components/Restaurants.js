import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './Header';
import Footer from './Footer';

const Restaurants = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Nearby Restaurants</Text>
        <View style={styles.buttonsContainer}>
          <Button title="Rating" onPress={() => console.log('Sort by Rating')} />
          <Button title="Price" onPress={() => console.log('Sort by Price')} />
        </View>
        <Text style={styles.sectionTitle}>Restaurants</Text>
        {/* Aquí puedes agregar tus cards de restaurantes */}
        {/* <RestaurantCard /> */}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
});

export default Restaurants;
