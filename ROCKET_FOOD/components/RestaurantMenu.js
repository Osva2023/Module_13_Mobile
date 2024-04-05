import React, { useState, useContext } from "react";
import { Modal, View, Text, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AuthContext from "../services/AuthContext";
import Layout from "./Layout";
import styles from "../styles/RestaurantMenuStyles";
import handleConfirmation from "../services/handleConfirmation";
const RestaurantMenu = ({ route }) => {
  const { menu, restaurant } = route.params;
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [order, setOrder] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isOrderSuccesful, setIsOrderSuccesful] = useState(false);
  const convertToUSD = (price) => {
    const conversionRate = 0.01;
    return (price * conversionRate).toFixed(2);
  };
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
    const success = await handleConfirmation(
      restaurant.id,
      user.customer_id,
      order.items
    );
    setIsProcessing(false);
    setIsOrderSuccesful(success);
  };

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
              {isOrderSuccesful ? (
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <Icon name="check-circle" size={24} color="green" />
                  <Text>Thank you! Your order has been received</Text>
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
                    onPress={() =>
                      setQuantities({
                        ...quantities,
                        [item.id]: Math.max(0, quantity - 1),
                      })
                    }
                  >
                    <Icon name="minus" size={15} color="#000" />
                  </TouchableOpacity>

                  <Text>{quantity}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      setQuantities({ ...quantities, [item.id]: quantity + 1 })
                    }
                  >
                    <Icon name="plus" size={15} color="#000" />
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
