import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

export default function Resultado(props) {
    let peso = this.props.navigation.getParam('peso', 'nulo');
    let altura = this.props.navigation.getParam('altura', 'nulo');
    let calc = peso / (altura * altura);

    if(calc < 17)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextRed}>Muito abaixo do peso.</Text>
            </View>
        )
    else if(calc < 18.5)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextRed}>Abaixo do peso.</Text>
            </View>
        )
    else if(calc < 25)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextBlue}>Peso normal.</Text>
            </View>
        )
    else if(calc < 30)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextRed}>Acima do peso.</Text>
            </View>
        )
    else if(calc < 35)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextRed}>Obesidade 1</Text>
            </View>
        )
    else if(calc < 40)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextRed}>Obesidade 2 (severa)</Text>
            </View>
        )
    else if(calc > 40)
        return(
            <View>
                <Text style={styles.headerText}>Resultado</Text>
                <Text style={styles.headerText}>
                    Seu IMC é { calc.toString() }
                </Text>
                <Text style={styles.headerTextRed}>Obesidade 3 (mórbida)</Text>
            </View>
        )
    
    return(
        <Button style={styles.viewButton} onPress={ () => this.props.navigation.navigate('Home') }>Home</Button>
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