import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inactiveButton: {
    backgroundColor: 'rgba(218, 88, 59, 0.5)',
    padding: 10,
    borderRadius: 5,
    width: 120,
    height: 40,
    marginTop: 10, // Add a top margin to the button style
    marginRight: 10, // Add a right margin to the button style
  },
  activeButton: {
    backgroundColor: 'rgba(218, 88, 59, 1)',
    padding: 10,
    borderRadius: 5,
    width: 120,
    height: 40,
    marginTop: 10, // Add a top margin to the button style
    marginRight: 10, // Add a right margin to the button style
  },
  
  buttonText: {
    color: '#fff', // Change the text color to white
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5,
    maxHeight: 220,
    maxWidth: '60%',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardPrice: {
    color: '#888',
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
  },
  detailsContainer: {
    height: 140,
    flexDirection: 'row', // Arrange children in a row
  justifyContent: 'space-between', // Add space between the children
  },
  menuContainer: {
    height: 300,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  emailButton: {
    padding: 10,
    backgroundColor: '#ddd',
    marginRight: 10,
  },
  textButton: {
    padding: 10,
    backgroundColor: '#ddd',
  },
  selectedButton: {
    padding: 10,
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#000',
  },
  cardImage: {
    width: '50%', // Use the full width of the card
    height: 100, // Set a fixed height
    resizeMode: 'cover', // Cover the whole width and height without distortion
    borderRadius: 10, // Optional: round the corners for a softer look
  },
});