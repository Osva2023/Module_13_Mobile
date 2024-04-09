import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Restaurants from './components/Restaurants';
import RestaurantMenu from './components/RestaurantMenu'; // Import the RestaurantMenu component
import AuthContext from './services/AuthContext';
import Orders from './components/Orders';
import AccountPage from './components/AccountPage';
import CustomerAccount from './components/CustomerAccount';
import CourierAccount from './components/CourierAccount';
import CourierDeliveries from './components/CourierDeliveries';
const Stack = createStackNavigator();
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="AccountPage" component={AccountPage} options={{ headerShown: false }}/>
          <Stack.Screen name="CustomerAccount" component={CustomerAccount} options={{ headerShown: false }}  />
          <Stack.Screen name="CourierAccount" component={CourierAccount} options={{ headerShown: false }} />
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="RestaurantMenu" component={RestaurantMenu} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="CourierDeliveries" component={CourierDeliveries} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;