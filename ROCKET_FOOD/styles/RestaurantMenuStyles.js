import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    
  },

  header: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'rgba(218, 88, 59, 0.5)',
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
    padding: 10,
    marginBottom: 10,
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
    flex: 1,
  },
  menuContainer: {
    flex: 1,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});