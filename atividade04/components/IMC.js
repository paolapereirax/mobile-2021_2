import React, { Component } from 'react'
import { Text, Button, TextInput, View, StyleSheet} from 'react-native';

export default class IMC extends Component {

    constructor(props){
        super(props)
        this.state = {
            peso: null,
            altura: null
        }
        
        this.botaoClickado = this.botaoClickado.bind(this);
    }

    render(){ 
        return(
            <View style={styles.container}>
                <Text>IMC</Text>
                
                <Text style={styles.headerText}>Peso</Text>
                <TextInput 
                    placeholder="Digite seu peso." 
                    style={styles.textInput} keyboardType="number-pad" 
                    onChangeText={ pesoInput => this.setState({ peso: pesoInput, mostrarCalculo: false }) }
                />

                <Text style={styles.headerText}>Altura</Text>
                <TextInput 
                    placeholder="Digite sua altura." 
                    style={styles.textInput} 
                    keyboardType="number-pad"
                    onChangeText={ alturaInput => this.setState({ altura: alturaInput, mostrarCalculo: false }) }
                />

                <Button 
                    title="Calcular!" 
                    style={styles.viewButton} 
                    onPress={ () => this.props.navigation.navigate("Resultado", {peso: peso, altura: altura}) }
                />
            </View>
        )
    }
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