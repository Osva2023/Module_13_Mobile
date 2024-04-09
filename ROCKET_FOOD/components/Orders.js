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
import OrderStyles from "../styles/OrderStyles";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders(user.customer_id, "customer"); // Pass the user id and 'customer' as arguments
      console.log(data); // Log the fetched data
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
      <View style={OrderStyles.container}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()}
          ListHeaderComponent={() => (
            <>
              <Text style={OrderStyles.header}>My Orders</Text>
              <View style={OrderStyles.headerContainer}>
                <Text style={OrderStyles.headerText}>ORDER</Text>
                <Text style={OrderStyles.headerText}>STATUS</Text>
                <Text style={OrderStyles.headerText}>VIEW</Text>
              </View>
            </>
          )}
          renderItem={({ item }) => (
            <View style={OrderStyles.row}>
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
          <View style={OrderStyles.modalContainer}>
            <View style={OrderStyles.modalView}>
              <View style={OrderStyles.modalHeader}>
                <View>
                  <Text style={OrderStyles.modalHeaderText}>{selectedOrder?.restaurant_name}</Text>
                  <Text style={OrderStyles.modalText}>Status: {selectedOrder?.status}</Text>
                  <Text style={OrderStyles.modalText}>Courier Name: {selectedOrder?.courier_name}</Text>
                </View>
                <TouchableOpacity style={OrderStyles.closeButton} onPress={() => setModalVisible(false)}>
                  <Icon name="close" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={OrderStyles.productContainer}>
                {selectedOrder?.products.map((product, index) => (
                  <View key={index} style={OrderStyles.productRow}>
                    <Text>{product.product_name}</Text>
                    <Text>x{product.quantity}</Text>
                    <Text>${convertToUSD(product.unit_cost)}</Text>
                  </View>
                ))}
              </View>
              <View style={OrderStyles.totalContainer}>
                <Text style={OrderStyles.totalText}>Total:</Text>
                <Text> ${convertToUSD(selectedOrder?.total_cost)}</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </Layout>
  );
                };
  export default MyOrders;