
const { EXPO_PUBLIC_NGROK_URL } = process.env; 


const handleLogin = async (email, password, navigation) => {
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

    const data = await response.json();

    if (data.success) {
      navigation.navigate('Restaurants');
    } else {
      alert('Login failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export default handleLogin;