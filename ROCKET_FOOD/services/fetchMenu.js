// api.js
export const fetchRestaurantMenu = async (restaurantId) => {
    const { EXPO_PUBLIC_NGROK_URL } = process.env;
    const url = new URL(`${EXPO_PUBLIC_NGROK_URL}/api/products`);
  
    url.searchParams.append('restaurant', restaurantId);
  
    try {
      const response = await fetch(url);
      const menu = await response.json();
      return menu;
    } catch (error) {
      console.error(error);
    }
  };