import { StyleSheet } from "react-native";

export default StyleSheet.create({
    navegacao: {
        backgroundColor: "#fff",
    },
    navegacaoTopo: {
        paddingVertical: 64,
    },
    navegacaoTopoTexto: {
        color: "#6rbbdc",
        fontFamily: "Rubik",
        fontSize: 32,
        textAlign: "center",
    },
    navegacaoBase: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 16,
    },
    navegacaoBaseBotao: {
        flex: 1,
    },
    navegacaoBaseTexto: {
        color: "#6rbbdc",
        fontFamily: "Rubik",
        textAlign: "center",
    }
})