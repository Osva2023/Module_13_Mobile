import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/RestaurantStyle";
import { Picker } from "@react-native-picker/picker";
import { fetchRestaurants } from "../services/fetchRestaurants";
import { FlatList, TouchableOpacity } from "react-native";
import vietnamese from "../assets/vietnamese.jpg";
import japanese from "../assets/japanese.jpg";
import cuisinePasta from "../assets/cuisinePasta.jpg";
import cuisinePizza from "../assets/cuisinePizza.jpg";
import cuisineSoutheast from "../assets/cuisineSoutheast.jpg";
import EVS_Producto from "../assets/EVS_Producto.jpg";
import EVS7987 from "../assets/EVS7987.jpg";
import EVS8142 from "../assets/EVS8142.jpg";
import { fetchRestaurantMenu } from "../services/fetchMenu.js";
const Restaurants = ({ navigation }) => {
  const [selectedRating, setSelectedRating] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);

  const images = [
    vietnamese,
    japanese,
    cuisinePasta,
    cuisinePizza,
    cuisineSoutheast,
    EVS_Producto,
    EVS7987,
    EVS8142,
  ];
  
  const handleRestaurantClick = async (restaurant) => {
    console.log('Restaurant:', restaurant); // Log the entire restaurant object
    const fetchedMenu = await fetchRestaurantMenu(restaurant.id);
    console.log('Fetched menu:', fetchedMenu); // Log the fetched menu
    if (fetchedMenu.error) {
      console.error(fetchedMenu.error);
      return;
    }
    navigation.navigate('RestaurantMenu', { menu: fetchedMenu, restaurant });
  };
  function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRestaurants(selectedRating, selectedPrice);
      const dataWithPhotos = data.map((restaurant) => ({
        ...restaurant,
        photo: getRandomImage(),
      }));
      setRestaurants(dataWithPhotos);
    };

    fetchData();
  }, [selectedRating, selectedPrice]);

  return (
    <View style={styles.container}>
  <Header />
  <View style={styles.content}>
    <Text style={styles.title}>Nearby Restaurants</Text>
    <View style={styles.dropdownsRow}>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Rating:</Text>
        <DropDownPicker
          items={[
            { label: '--Select--', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          defaultValue={selectedRating}
          containerStyle={{ height: 20 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => setSelectedRating(item.value)}
        />
      </View>
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Price:</Text>
        <DropDownPicker
          items={[
            { label: '--Select--', value: '' },
            { label: '$', value: '1' },
            { label: '$$', value: '2' },
            { label: '$$$', value: '3' },
            { label: '$$$$', value: '4' },
          ]}
          defaultValue={selectedPrice}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={item => setSelectedPrice(item.value)}
        />
      </View>
    </View>
    <Text style={styles.sectionTitle}>Restaurants</Text>
    <FlatList
  data={restaurants}
  numColumns={2}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity 
      style={styles.restaurantCardContainer}
      onPress={() => handleRestaurantClick(item)}
    >
      <View style={styles.restaurantCard}>
        <Image style={styles.restaurantImage} source={item.photo} />
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantRating}>
          Rating: {item.rating}
        </Text>
      </View>
    </TouchableOpacity>
  )}
/>
  </View>
  <Footer />
</View>
  );
};

export default Restaurants;
