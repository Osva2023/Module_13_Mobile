import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import fetchOrders from "../services/fetchOrders";
import AuthContext from "../services/AuthContext";
import Icon from "react-native-vector-icons/FontAwesome";
import Layout from "./Layout";
import { convertToUSD } from "../services/currencyUtils";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders(user.customer_id);
      console.log(data);
      setOrders(data);
    };
    fetchData();
  }, []);

  const handlePress = (id) => {
    const order = orders.find((order) => order.id === id);
    setSelectedOrder(order);
    console.log(order);
    setModalVisible(true);
  };

  return (
    <Layout>
      <View style={{ padding: 10 }}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={() => (
            <>
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 10 }}>
                My Orders
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  backgroundColor: "#000",
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>ORDER</Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  STATUS
                </Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>VIEW</Text>
              </View>
            </>
          )}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text>{item.restaurant_name}</Text>
              <Text>{item.status}</Text>
              <TouchableOpacity onPress={() => handlePress(item.id)}>
                <Icon name="search" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          )}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                padding: 25,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
                width: "90%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#000",
                  borderRadius: 20,
                  padding: 20,
                  margin: 0,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "rgba(218, 88, 59, 1)",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {selectedOrder?.restaurant_name}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    Status: {selectedOrder?.status}
                  </Text>
                  <Text style={{ color: "#fff" }}>
                    Courier Name: {selectedOrder?.courier_name}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{ position: "absolute", top: 10, right: 10 }}
                  onPress={() => setModalVisible(false)}
                >
                  <Icon name="close" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: "#000",
                  padding: 10,
                  width: "100%",
                }}
              >
                {selectedOrder?.products.map((product, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text>{product.product_name}</Text>
                    <Text>x{product.quantity}</Text>
                    <Text>${convertToUSD(product.unit_cost)}</Text>
                  </View>
                ))}
              </View>
              <View style={{ alignSelf: "flex-end" }}>
                <View
                  style={{ flexDirection: "row", justifyContent: "flex-end" }}
                >
                  <Text style={{ fontWeight: "bold" }}>Total:</Text>
                  <Text> ${convertToUSD(selectedOrder?.total_cost)}</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Layout>
  );
};

export default MyOrders;
