import React from "react";
import { View, Text } from "react-native";
import Layout from "./Layout";

const RestaurantMenu = ({ route }) => {
  const { menu } = route.params;
  return (
    <Layout>
      {menu.map((item) => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.cost}</Text>
        </View>
      ))}
    </Layout>
  );
};

export default RestaurantMenu;