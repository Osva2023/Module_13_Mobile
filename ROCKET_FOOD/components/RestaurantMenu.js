import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import Layout from "./Layout";
import styles from "../styles/RestaurantMenuStyles";

const RestaurantMenu = ({ route }) => {
  const { menu, restaurant } = route.params;

  const [quantities, setQuantities] = useState({});

  const convertToUSD = (price) => {
    const conversionRate = 0.01;
    return (price * conversionRate).toFixed(2);
  };
  const createOrder = () => {
    const orderItems = menu
      .filter(item => quantities[item.id] > 0)
      .map(item => ({
        id: item.id,
        quantity: quantities[item.id],
        price: item.cost,
      }));
  
    const total = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    const order = {
      restaurantId: restaurant.id, // Include the restaurant id
      items: orderItems,
      total: total,
    };
  
    console.log(order); // Log the order for now
  };
  
  // ...

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.header}>Restaurant Menu</Text>
          <Text>{restaurant.name}</Text>
          <Text>Price: {String(restaurant.price_range)}</Text>
          <Text>Rating: {String(restaurant.rating)}</Text>
          <TouchableOpacity style={styles.button} onPress={createOrder}>
            <Text style={styles.buttonText}>Create Order</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          {menu.map((item) => {
            const quantity = quantities[item.id] || 0;
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>${convertToUSD(item.cost)}</Text>
                <Text style={styles.cardDescription}>
                  Here we have the plate description
                </Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => setQuantities({...quantities, [item.id]: Math.max(0, quantity - 1)})}
                  >
                    <Text>-</Text>
                  </TouchableOpacity>
                  <Text>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => setQuantities({...quantities, [item.id]: quantity + 1})}
                  >
                    <Text>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </Layout>
  );
};

export default RestaurantMenu;