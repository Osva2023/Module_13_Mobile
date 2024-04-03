import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1, // Add a top border
    borderTopColor: '#ddd', // Set the border color
  },
  button: {
    flexDirection: 'column',
    //backgroundColor: 'rgba(218, 88, 59, 0.5)',
    borderRadius: 20, // Add round borders
  },
  buttonText: {
    color: '#000', // Change the text color to black
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default styles;