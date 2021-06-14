import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerPrice: { //Topo do App
        width: "100%",
        height: "auto",
        alignItems: "center",
        marginBottom: 20
    },
    currentPrice: { //Valor do bitcoin
        color: "#f50d41",
        fontSize: 32,
        fontWeight: "bold",
        paddingTop: 20
    },
    textPrice: { //Informa sobre última cotação
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    }
});

export default styles