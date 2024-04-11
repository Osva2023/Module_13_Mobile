const handleLogin = async (email, password, navigation, setUser, setUserType) => {
  const { EXPO_PUBLIC_NGROK_URL } = process.env;
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
    setUser(userData);

    if (userData.customer_id && userData.courier_id) {
      setUserType('both');
      navigation.navigate('AccountPage', { setUserType });
    } else if (userData.customer_id && !userData.courier_id) {
      setUserType('customer');
      navigation.navigate('Restaurants');
    } else if (!userData.customer_id && userData.courier_id) {
      setUserType('courier');
      navigation.navigate('CourierAccount');
    } else {
      alert('Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleLogin;