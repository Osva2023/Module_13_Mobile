
const { EXPO_PUBLIC_NGROK_URL } = process.env; 


const handleLogin = async (email, password, navigation, setUser) => {
  try {
    const response = await fetch(`${EXPO_PUBLIC_NGROK_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const userData = await response.json();

    if (userData.customer_id && userData.courier_id) {
      navigation.navigate('AccountPage');
    } else if (userData.customer_id && !userData.courier_id) {
      navigation.navigate('Restaurants');
    } else if (!userData.customer_id && userData.courier_id) {
      navigation.navigate('CourierAccount');
    } else {
      alert('Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleLogin;