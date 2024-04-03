import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: '#ddd', // Set the border color
  },
  logo: {
    width: 100,
    height: 50,
  },
  button: {
    backgroundColor: 'rgba(218, 88, 59, 1)',
  },
});

export default styles;