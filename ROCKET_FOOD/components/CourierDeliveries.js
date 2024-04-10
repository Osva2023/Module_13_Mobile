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
import updateDeliveryStatus from "../services/updateDeliveryStatus";
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
                {item.status === "pending" || item.status === "in progress" ? (
                  <TouchableOpacity
                    style={[
                      styles.cell,
                      styles.statusCell,
                      item.status === "pending"
                        ? styles.pending
                        : styles.inProgress,
                    ]}
                    onPress={() => {
                      const newStatus = item.status === "pending" ? "in progress" : "delivered";
                      updateDeliveryStatus(item.id, newStatus)
                        .then(data => {
                          // Handle the response data
                        })
                        .catch(error => {
                          // Handle the error
                        });
                    }}
                  >
                    <Text style={styles.statusText}>{item.status}</Text>
                  </TouchableOpacity>
                ) : (
                  <View
                    style={[
                      styles.cell,
                      styles.statusCell,
                      styles.delivered,
                    ]}
                  >
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                )}
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
        {/* ... */}
      </View>
    </Layout>
  );
};

export default CourierDeliveries;
