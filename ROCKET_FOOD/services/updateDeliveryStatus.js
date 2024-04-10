// updateDeliveryStatus.js
export default async function updateDeliveryStatus(orderId, newStatus) {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    const response = await fetch(`${EXPO_PUBLIC_NGROK_URL}/api/order/${orderId}/status`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
  }