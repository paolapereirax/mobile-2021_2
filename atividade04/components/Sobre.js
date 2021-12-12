import { View, StyleSheet, Button } from "react-native";

export default function Sobre(){
    return(
        <View>
            <Text style={styles.headerText}>Sobre</Text>
            <Text>Essa é uma aplicação onde você pode olhar suas informações e fazer o cálculo de seu IMC</Text>
            <Button style={styles.viewButton} onPress={() => this.props.navigation.navigate('Home')}>Home</Button>
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