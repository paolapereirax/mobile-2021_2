import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Home(props) {
    return(
        <View>
            <Text style={styles.headerText}>ATV 04</Text>
            <Button style={styles.viewButton} onPress={() => this.props.navigation.navigate('Cadastro')}>Cadastro</Button>
            <Button style={styles.viewButton} onPress={() => this.props.navigation.navigate('IMC')}>IMC</Button>
            <Button style={styles.viewButton} onPress={() => this.props.navigation.navigate('Sobre')}>Sobre</Button>
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