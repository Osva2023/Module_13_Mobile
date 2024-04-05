// Layout.js
import React from 'react';
import { View } from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';

const Layout = ({ children }) => (
  <View>
    <Header />
    {children}
    <Footer />
  </View>
);

export default Layout;