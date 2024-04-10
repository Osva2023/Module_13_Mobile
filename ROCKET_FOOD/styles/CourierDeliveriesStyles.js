// CourierDeliveriesStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Other styles...
  
    container: {
      
      flexDirection: 'column', // Add this line
      // ...other styles
    },
  header: {
    fontSize: 30, // Increase the font size as needed
    // Add other styles as needed
  },
  headerRow: {
    flexDirection: 'row', // This will make the headers display in a row
    justifyContent: 'space-between', // This will add space between the headers
    backgroundColor: 'black', // This will make the background black
    padding: 10, // Add padding as needed
  },
  listHeader: {
    color: 'white', // This will make the text white
    // Add other styles as needed
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cell: {
    color: 'black', // This will make the text white
    width: '25%',
    textAlign: 'center',
    justifyContent: 'center', // Add this line
    alignItems: 'center', // Add this line
  
  },
  pending: {
    backgroundColor: '#851919',
  },
  inProgress: {
    backgroundColor: '#DA583B',
  },
  delivered: {
    backgroundColor: '#609475',
  },
  statusCell: {
    flex: 1.5, // Make the cell larger
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 5,
  },
  statusText: {
    textAlign: 'center', // Center the text
    color: 'white', // Make the text white
  },
  
});