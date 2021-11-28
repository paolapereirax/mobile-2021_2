import React from "react";
import { Text, StyleSheet, ColorPropType } from "react-native";

export default function IMCMsg(props) {
    if(props.calculo < 17)
        return(
            <Text style={styles.headerTextRed}>Muito abaixo do peso.</Text>
        )
    else if(props.calculo < 18.5)
        return(
            <Text style={styles.headerTextRed}>Abaixo do peso.</Text>
        )
    else if(props.calculo < 25)
        return(
            <Text style={styles.headerTextBlue}>Peso normal.</Text>
        )
    else if(props.calculo < 30)
        return(
            <Text style={styles.headerTextRed}>Acima do peso.</Text>
        )
    else if(props.calculo < 35)
        return(
            <Text style={styles.headerTextRed}>Obesidade 1</Text>
        )
    else if(props.calculo < 40)
        return(
            <Text style={styles.headerTextRed}>Obesidade 2 (severa)</Text>
        )
    else if(props.calculo > 40)
        return(
            <Text style={styles.headerTextRed}>Obesidade 3 (mórbida)</Text>
        )
}

const styles = StyleSheet.create({
    headerTextRed: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        color: "red"
    },

    headerTextBlue: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold",
        color: "blue"
    }
});