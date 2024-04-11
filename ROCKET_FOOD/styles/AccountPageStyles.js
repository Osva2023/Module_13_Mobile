// AccountPageStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    // Define your styles for logoContainer here
  },
  logo: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    resizeMode: 'contain', // This will make sure your logo keeps its aspect ratio
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  formContainer: {
    width: '50%',
    flexDirection: 'row', // This will make the icons display side by side
    justifyContent: 'space-between', // This will add space between the icons
  },
  iconContainer: {
    borderWidth: 1, // This will add a border
    borderColor: 'gray', // This will make the border gray
    borderRadius: 50, // This will make the border rounded
    padding: 10, // This will add some space around the icon
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});