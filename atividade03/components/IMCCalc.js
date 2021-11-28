import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import IMCMsg from './IMCMsg';

export default function IMCCalc(props) {
    let calc = props.peso / (props.altura * props.altura);

    return (
        <View>
            <Text style={styles.headerText}>
                Seu IMC é { calc.toString() }
            </Text>
            <IMCMsg calculo={calc}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20,
        marginBottom: 15
    },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
});