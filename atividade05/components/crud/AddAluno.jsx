import React, { useState } from "react";
import {
    Button,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
} from "react-native";

import firebase from '../../firebase/firebase_config'

const AddAluno = (props) => {
    const initalState = {
        nome: "",
        sobrenome: "",
        curso: "",
        ira: ""
    };

    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveAluno = async () => {
        if (state.name === "") {
            alert("please provide a name");
        } else {

            try {
                await firebase.db.collection("alunos").add({
                    nome: state.nome,
                    sobrenome: state.sobrenome,
                    curso: state.curso,
                    ira: state.ira
                });
                console.log('OK!')
                props.navigation.navigate("ListAluno");
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Name Input */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Nome"
                    onChangeText={(value) => handleChangeText(value, "nome")}
                    value={state.nome}
                />
            </View>

            {/* Email Input */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Sobrenome"
                    onChangeText={(value) => handleChangeText(value, "sobrenome")}
                    value={state.sobrenome}
                />
            </View>

            {/* Input */}
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="Curso"
                    onChangeText={(value) => handleChangeText(value, "curso")}
                    value={state.curso}
                />
            </View>

            <View style={styles.inputGroup}>
                <TextInput
                    placeholder="IRA"
                    onChangeText={(value) => handleChangeText(value, "ira")}
                    value={state.ira}
                />
            </View>

            <View style={styles.button}>
                <Button title="Salvar Aluno" onPress={() => saveAluno()} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default AddAluno;