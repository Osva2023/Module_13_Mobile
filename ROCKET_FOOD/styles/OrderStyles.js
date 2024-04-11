import { StyleSheet } from 'react-native';

const OrderStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  listContainer: {
    marginBottom: 200, // Adjust this value to the height of your footer
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  modalHeader: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 20,
    margin: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  modalHeaderText: {
    color: "rgba(218, 88, 59, 1)",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalText: {
    color: "#fff",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  productContainer: {
    borderBottomWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "100%",
  },
  productRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  totalText: {
    fontWeight: "bold",
  },
});

export default OrderStyles;