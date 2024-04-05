// api.js
export const fetchRestaurants = async (rating, price_range) => {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    const url = new URL(`${EXPO_PUBLIC_NGROK_URL}/api/restaurants`);
    const params = { rating, price_range };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };