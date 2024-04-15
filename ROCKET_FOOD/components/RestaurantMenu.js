import React, { useState, useContext } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthContext from "../services/AuthContext";
import Layout from "./Layout";
import styles from "../styles/RestaurantMenuStyles";
import handleConfirmation from "../services/handleConfirmation";
import { convertToUSD } from "../services/currencyUtils";
import vietnamese from "../assets/vietnamese.jpg";
import japanese from "../assets/japanese.jpg";
import cuisinePasta from "../assets/cuisinePasta.jpg";
import cuisinePizza from "../assets/cuisinePizza.jpg";
import cuisineSoutheast from "../assets/cuisineSoutheast.jpg";
import EVS_Producto from "../assets/EVS_Producto.jpg";
import EVS7987 from "../assets/EVS7987.jpg";
import EVS8142 from "../assets/EVS8142.jpg";
const RestaurantMenu = ({ route }) => {
  const { menu, restaurant } = route.params;
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [order, setOrder] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderSuccesful, setIsOrderSuccesful] = useState(false);
  const [isOrderFailed, setIsOrderFailed] = useState(false);
  const [emailSelected, setEmailSelected] = useState(false);
  const [textSelected, setTextSelected] = useState(false);
  const [isOrderActive, setIsOrderActive] = useState(false);
  const productImages = [
    vietnamese,
    japanese,
    cuisinePasta,
    cuisinePizza,
    cuisineSoutheast,
    EVS_Producto,
    EVS7987,
    EVS8142,
  ];
  const createOrder = () => {
    const orderItems = menu
      .filter((item) => quantities[item.id] > 0)
      .map((item) => ({
        id: item.id,
        name: item.name,
        quantity: quantities[item.id],
        price: item.cost,
      }));

    const total = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    setOrder({
      customer_id: user.customer_id,
      restaurantId: restaurant.id,
      items: orderItems,
      total: total,
    });
    setModalVisible(true);
  };
  const onConfirmOrder = async () => {
    setIsProcessing(true);

    let message = {
      send_email: emailSelected ? true : false,
      send_sms: textSelected ? true : false,
    };
    const success = await handleConfirmation(
      restaurant.id,
      user.customer_id,
      order.items,
      message
    );
    setIsProcessing(false);
    setIsOrderSuccesful(success);
    setIsOrderFailed(!success);
  };

  function getRandomProductImage() {
    const randomIndex = Math.floor(Math.random() * productImages.length);
    return productImages[randomIndex];
  }
  return (
    <Layout>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: 35,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "black",
                  padding: 10,
                  borderTopStartRadius: 20,
                  borderTopEndRadius: 20,
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  Order Confirmation
                </Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>X</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 10 }}>
                Order Summary
              </Text>
              {order &&
                order.items.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      marginTop: 10,
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Text>x{item.quantity}</Text>
                    <Text>${convertToUSD(item.price)}</Text>
                  </View>
                ))}
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  width: "100%",
                  marginTop: 10,
                }}
              />
              <Text style={{ marginTop: 10 }}>
                Total: ${order && convertToUSD(order.total)}
              </Text>
              <View style={{ marginTop: 20 }}>
                <Text>
                  Would you like to receive your order confirmation by email
                  and/or text?
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={
                      emailSelected ? styles.selectedButton : styles.emailButton
                    }
                    onPress={() => setEmailSelected(!emailSelected)}
                  >
                    <Text style={styles.buttonText}>Email</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={
                      textSelected ? styles.selectedButton : styles.textButton
                    }
                    onPress={() => setTextSelected(!textSelected)}
                  >
                    <Text style={styles.buttonText}>Text</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {isOrderSuccesful ? (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <Icon name="check-circle" size={24} color="green" />
                  <Text>Thank you! Your order has been received</Text>
                </View>
              ) : isOrderFailed ? (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <Icon name="times-circle" size={24} color="red" />
                  <Text>
                    Your order was not processed successfully. Please try again.
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={onConfirmOrder}
                  >
                    <Text style={styles.buttonText}>
                      {isProcessing ? "Processing Order..." : "Confirm Order"}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{ marginTop: 20 }}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={onConfirmOrder}
                  >
                    <Text style={styles.buttonText}>
                      {isProcessing ? "Processing Order..." : "Confirm Order"}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </Modal>

        <View style={styles.detailsContainer}>
          <View>
            <Text style={styles.header}>Restaurant Menu</Text>
            <Text>{restaurant.name}</Text>
            <Text>Price: {String(restaurant.price_range)}</Text>
            <Text>Rating: {String(restaurant.rating)}</Text>
          </View>
          <TouchableOpacity
            style={isOrderActive ? styles.activeButton : styles.inactiveButton}
            onPress={createOrder}
          >
            <Text style={styles.buttonText}>Create Order</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.menuContainer}>
          {menu.map((item) => {
            const quantity = quantities[item.id] || 0;
            const imageUrl = getRandomProductImage(item.id); // Call the function to get the image URL
            return (
              <View key={item.id} style={styles.card}>
                <Image source={imageUrl} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardPrice}>${convertToUSD(item.cost)}</Text>
                <Text style={styles.cardDescription}>
                  Here we have the plate description
                </Text>
                <View style={styles.counterContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      const newQuantity = Math.max(0, quantity - 1);
                      const newQuantities = {
                        ...quantities,
                        [item.id]: newQuantity,
                      };
                      setQuantities(newQuantities);
                      setIsOrderActive(
                        Object.values(newQuantities).some((qty) => qty !== 0)
                      );
                    }}
                  >
                    <Icon name="minus" size={20} color="#000" />
                  </TouchableOpacity>

                  <Text>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      const newQuantity = quantity + 1;
                      const newQuantities = {
                        ...quantities,
                        [item.id]: newQuantity,
                      };
                      setQuantities(newQuantities);
                      setIsOrderActive(
                        Object.values(newQuantities).some((qty) => qty !== 0)
                      );
                    }}
                  >
                    <Icon name="plus" size={20} color="#000" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default RestaurantMenu;
