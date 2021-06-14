import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
  mainContent: { //Um quadrado que envolve as informações
    width: "95%",
    height: "auto",
    backgroundColor: "#000000",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between"
 },
 contextLeft: {
     width: "36%",
     alignItems: "flex-start",
 },
 logoBitcoin: {
     width: 40,
     height: 40
 },
 boxLogo: {
    flexDirection: "row",
    alignItems: "center",
},
dayCotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: "#ffffff",
    fontWeight: "bold"
},
 contextRight: {
    width: "60%",
    alignItems: "flex-end",
},
price: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold"
}
});
 
export default styles