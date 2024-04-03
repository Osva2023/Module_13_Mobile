import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
  },
  logo: {
    width: 200, // increase this value to make the logo wider
    height: 200, // increase this value to make the logo taller
    resizeMode: 'contain',
  },
  formContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%', // make the button as wide as its container
    height: 40, // set the height of the button
    borderRadius: 20, // round the borders
    justifyContent: 'center', // center the text vertically
    alignItems: 'center', // center the text horizontally
  },
  buttonText: {
    color: '#fff', // make the text white
  },
});