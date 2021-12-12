import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

export default class Cadastro extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            nome: null,
            idade: null,
            email: null
        }
        
        this.botaoClickado = this.botaoClickado.bind(this);
    }

    render(){
        return(
            <View>
                <Text style={styles.headerText}>Cadastro</Text>

                <Text style={styles.headerText}>Nome</Text>
                <TextInput
                    placeholder="Digite seu nome"
                    style={styles.textInput}
                    onChangeText={ nomeInput => this.setState({ nome: nomeInput })}
                />

                <Text style={styles.headerText}>Idade</Text>
                <TextInput
                    placeholder="Digite sua idade"
                    style={styles.textInput}
                    keyboardType="number-pad" 
                    onChangeText={ idadeInput => this.setState({ idade: idadeInput })}
                />

                <Text style={styles.headerText}>Email</Text>
                <TextInput
                    placeholder="Digite seu email"
                    style={styles.textInput}
                    onChangeText={ emailInput => this.setState({ email: emailInput })}
                />

                <Button style={styles.viewButton} onPress={ () => this.props.navigation.navigate('Perfil', { nome: nome, idade: idade, email: email })}>Cadastrar</Button>
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