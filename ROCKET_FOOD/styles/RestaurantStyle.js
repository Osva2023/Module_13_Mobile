import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dropdownsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    
    flexDirection: 'column',
    //alignItems: 'flex-start',
    marginBottom: 20,
    padding: 10,
  },
  dropdownLabel: {
    marginBottom: 10,
    
  },
  dropdown: {
    //flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(218, 88, 59, 0.5)', // change this to your desired color
    borderRadius: 10, // change this to your desired border radius
    borderWidth: 0, // change this line to remove the border
  },
  picker: {
    color: '#000', // change this to your desired text color
    backgroundColor: 'transparent', // add this line
  },
  restaurantCardContainer: {
    width: '50%',
    padding: 10,
    margin: 5, // this separates the containers
    borderWidth: 1,
    borderColor: '#ddd', // this sets the border color to light gray
  },
  restaurantImage: {
    width: '100%',
    height: 100, // adjust this value to change the height of the image
  },

});

export default styles;