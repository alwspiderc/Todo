import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#272727',
        position: "relative"

    },

    containerInput: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: 150
    },

    // Status
    containerStatus: {
        width: "100%",
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 60,
    },

    containerCreate: {
        flexDirection: "row",
    },

    TextCreate: {
        color: "#4EA8DE",
        fontWeight: "bold",
        fontSize: 14,
        paddingRight: 8,
    },

    TextCompleted: {
        color: "#8284FA",
        fontWeight: "bold",
        fontSize: 14,
        paddingRight: 8,
    },

    containerScoreCreate: {
        width: 25,
        height: 19,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        backgroundColor: "#333333"
    }, 

    TextScoreCreate: {
        color: "#D9D9D9",
        fontWeight: "bold",
        fontSize: 12,
    },

    decoration: {
        width: 340,
        height: 1,
        marginBottom: 48,
        backgroundColor: "#808080",
    },

     // FlatList
    containerTasks: {
        paddingTop: 20,
        // paddingBottom: 40
    },

    contentTasks: {
        width: 327,
        height: 64,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#333333", 
    },

    textTasks: {
        fontSize: 12,
        color: "#F2F2F2",
    },


    // FlatList Empty
    containerEmpty: {
        alignItems: "center",
        paddingTop: 20,
    },

    containerTextEmpty: {
        paddingTop: 16,
    },

    textEmptyBold: {
        fontWeight: "bold",
        fontSize: 14,
        color: "#808080",
    },

    textEmptyNormal: {
        fontSize: 14,
        color: "#808080",
    },

})
  