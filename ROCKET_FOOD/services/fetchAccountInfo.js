const fetchAccountInfo = async (userId, type) => {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    const response = await fetch(`${EXPO_PUBLIC_NGROK_URL}/api/account/${userId}?type=${type}`);
    const data = await response.json();
    return data;
  };
  
  export default fetchAccountInfo;