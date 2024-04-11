// Layout.js
import React from 'react';
import { View , StyleSheet} from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
const Layout = ({ children }) => (
  <View style={styles.layout}>
    <Header />
    {children}
    <Footer />
  </View>
);

export default Layout;