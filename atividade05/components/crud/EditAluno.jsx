import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Button,
  View,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from '../../firebase/firebase_config'

const EditAluno = (props) => {
  const initialState = {
    id: "",
    nome: "",
    sobrenome: "",
    curso: "",
    ira: ""
  };

  const [aluno, setAluno] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const handleTextChange = (value, prop) => {
    setAluno({ ...aluno, [prop]: value });
  };

  const getAlunoById = async (id) => {
    const dbRef = firebase.db.collection("alunos").doc(id);
    const doc = await dbRef.get();
    const aluno = doc.data();
    setAluno({ ...aluno, id: doc.id });
    setLoading(false);
  };

  const deleteAluno = async () => {
    setLoading(true)
    const dbRef = firebase.db
      .collection("alunos")
      .doc(props.route.params.alunoId);
    await dbRef.delete();
    setLoading(false)
    props.navigation.navigate("ListAluno");
  };

  const openConfirmationAlert = () => {
    deleteAluno()
  };

  const updateAluno = async () => {
    const alunoRef = firebase.db.collection("alunos").doc(aluno.id);
    await alunoRef.set({
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      curso: aluno.curso,
      ira: aluno.ira
    });
    setAluno(initialState);
    props.navigation.navigate("ListAluno");
  };

  useEffect(() => {
    getAlunoById(props.route.params.alunoId);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          placeholder="Nome"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={aluno.nome}
          onChangeText={(value) => handleTextChange(value, "nome")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Sobrenome"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={aluno.sobrenome}
          onChangeText={(value) => handleTextChange(value, "sobrenome")}
        />
      </View>
      <View>
        <TextInput
          placeholder="Curso"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={aluno.curso}
          onChangeText={(value) => handleTextChange(value, "curso")}
        />
      </View>
      <View>
        <TextInput
          placeholder="IRA"
          autoCompleteType="username"
          style={styles.inputGroup}
          value={aluno.ira}
          onChangeText={(value) => handleTextChange(value, "ira")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Delete"
          onPress={() => openConfirmationAlert()}
          color="#E37399"
        />
      </View>
      <View>
        <Button title="Update" onPress={() => updateAluno()} color="#19AC52" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
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
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  btn: {
    marginBottom: 7,
  },
});

export default EditAluno;