// CourierDeliveries.js
import React, { useState, useEffect, useContext } from "react";
import Layout from "./Layout";
import { View, Text, FlatList, TouchableOpacity, Modal } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "../styles/CourierDeliveriesStyles";
import modalStyles from "../styles/ModalStyles";
import fetchOrders from "../services/fetchOrders";
import AuthContext from "../services/AuthContext";
import { convertToUSD } from "../services/currencyUtils";
const CourierDeliveries = ({ navigation }) => {
  const [deliveries, setDeliveries] = useState([]);
  const { user, setUser } = useContext(AuthContext);

  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log("CourierDeliveries - user:", user);
    const fetchData = async () => {
      const data = await fetchOrders(user.user_id, "courier"); // Pass the user id and 'courier' as arguments
      console.log(data); // Log the fetched data
      setDeliveries(data);
    };

    fetchData();
  }, [user]); // Add user as a dependency so the effect runs whenever the user changes

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.header}>My Deliveries</Text>
        <View style={styles.headerRow}>
          <Text style={styles.listHeader}>ORDER ID</Text>
          <Text style={styles.listHeader}>ADDRESS</Text>
          <Text style={styles.listHeader}>STATUS</Text>
          <Text style={styles.listHeader}>VIEW</Text>
        </View>
        <FlatList
          data={deliveries}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            const address = item.customer_address.split(",")[0];

            return (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.id}</Text>
                <Text style={styles.cell}>{address}</Text>
                <View
                  style={[
                    styles.cell,
                    styles.statusCell,
                    item.status === "pending"
                      ? styles.pending
                      : item.status === "in progress"
                      ? styles.inProgress
                      : styles.delivered,
                  ]}
                >
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDelivery(item);
                    setModalVisible(true);
                  }}
                  style={styles.cell}
                >
                  <FontAwesome name="search-plus" size={20} color="black" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <View style={modalStyles.modalHeader}>
                <Text style={modalStyles.modalHeaderText}>
                  Delivery Details:
                </Text>
                {selectedDelivery && (
                  <Text style={modalStyles.status}>
                    Status: {selectedDelivery.status}
                  </Text>
                )}
                <TouchableOpacity
                  style={modalStyles.closeButton}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={modalStyles.textStyle}>X</Text>
                </TouchableOpacity>
              </View>
              {selectedDelivery && (
                <>
                  <View style={modalStyles.detailsContainer}>
                    <Text style={modalStyles.detailText}>
                      Delivery Address:{" "}
                      {selectedDelivery.customer_address.split(",")[0]}
                    </Text>
                    <Text style={modalStyles.detailText}>
                      Restaurant: {selectedDelivery.restaurant_name}
                    </Text>
                    <Text style={modalStyles.detailText}>
                      Order Date:{" "}
                      {new Date(
                        selectedDelivery.created_at
                      ).toLocaleDateString()}
                    </Text>
                  </View>
                  <View style={modalStyles.orderDetailsContainer}>
                    <Text style={modalStyles.orderDetailsHeader}>
                      Order Details:
                    </Text>
                    {selectedDelivery.products.map((product, index) => (
                      <View key={index} style={modalStyles.productRow}>
                        <Text style={[modalStyles.productName, { flex: 3 }]}>
                          {product.product_name}
                        </Text>
                        <Text
                          style={[modalStyles.productQuantity, { flex: 1 }]}
                        >
                          X{product.quantity}
                        </Text>
                        <Text style={[modalStyles.productCost, { flex: 1 }]}>
                          ${convertToUSD(product.unit_cost)}
                        </Text>
                      </View>
                    ))}
                  </View>
                  <View style={modalStyles.totalContainer}>
                    <Text style={modalStyles.totalText}>
                      Total: ${convertToUSD(selectedDelivery.total_cost)}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </Layout>
  );
};

export default CourierDeliveries;
