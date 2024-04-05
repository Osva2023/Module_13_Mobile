export const handleConfirmation = async (restaurantId, customerId, products) => {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    const url = `${EXPO_PUBLIC_NGROK_URL}/api/orders`;
  
    const body = {
      restaurant_id: restaurantId,
      customer_id: customerId,
      products: products.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    };
  
    console.log('Sending:', body);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      const data = await response.json();
  
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  export default handleConfirmation;