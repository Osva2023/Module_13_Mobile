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
    width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
    borderRadius: 10, // Add round borders
  },
  activeButton: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
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