
const fetchOrders = async (customerId) => {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    // Replace with your actual fetch code
    const response = await fetch(`${EXPO_PUBLIC_NGROK_URL}/api/orders?id=${customerId}&type=customer`);
    const data = await response.json();
    return data;
  };
  
  export default fetchOrders;