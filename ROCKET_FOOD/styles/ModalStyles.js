import { StyleSheet } from 'react-native';

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center", 
  },
  modalHeader: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 40,
    marginHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  modalHeaderText: {
    color: 'rgba(218, 88, 59, 1)',
    fontSize: 20,
  },
  status: {
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  textStyle: {
    color: 'white',
  },
  detailsContainer: {
    alignItems: 'flex-start',
  },
  detailText: {
    textAlign: 'left',
  },
  orderDetailsContainer: {
    borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: 0,
  borderBottomWidth: 1,
  padding: 20,
  marginHorizontal: 0,
  marginTop: 0,
  marginBottom: 10,
},
  orderDetailsHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  productName: {
    textAlign: 'left',
  },
  productQuantity: {
    textAlign: 'center',
  },
  productCost: {
    textAlign: 'right',
  },

  totalContainer: {
    
    alignItems: 'flex-end',
    marginTop: 10,
  },
  totalText: {
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default modalStyles;