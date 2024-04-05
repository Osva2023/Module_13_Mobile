import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import  fetchOrders  from '../services/fetchOrders';  
import AuthContext from "../services/AuthContext";
import Icon from 'react-native-vector-icons/FontAwesome';
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOrders(user.customer_id);
      console.log(data);
      setOrders(data);
    };
    fetchData();
  }, []);
  

  const handlePress = (id) => {
    console.log('Order ID:', id);
    // Navigate to the order details screen or perform any other action
  };
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>My Orders</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>ORDER</Text>
        <Text style={{ fontWeight: 'bold' }}>STATUS</Text>
        <Text style={{ fontWeight: 'bold' }}>VIEW</Text>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text>{item.restaurant_name}</Text>
            <Text>{item.status}</Text>
            <TouchableOpacity onPress={() => handlePress(item.id)}>
        <Icon name="search" size={20} color="#000" /> 
      </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MyOrders;