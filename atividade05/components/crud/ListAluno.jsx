import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

import firebase from '../../firebase/firebase_config'

const ListAluno= (props) => {
    const [alunos, setAlunos] = useState([]);

    useEffect(
        () => {
            firebase.db.collection("alunos").onSnapshot((querySnapshot) => {
                const alunos = [];
                querySnapshot.docs.forEach((doc) => {
                    const { nome, sobrenome, curso, ira } = doc.data();
                    alunos.push({
                        id: doc.id,
                        nome,
                        sobrenome,
                        curso,
                        ira
                    });
                });
                setAlunos(alunos);
            });
        }
        , []);

    return (
        <ScrollView>
            <Button
                onPress={() => props.navigation.navigate("AddAluno")}
                title="Criar Aluno"
            />
            {alunos.map(
                (aluno) => {
                    return (
                        <ListItem
                            key={aluno.id}
                            bottomDivider
                            onPress={() => {
                                props.navigation.navigate("EditAluno", {
                                    alunoId: aluno.id,
                                });
                            }}
                        >
                            <ListItem.Chevron />
                            <Avatar
                                source={{
                                    uri:
                                        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                                }}
                                rounded
                            />
                            <ListItem.Content>
                                <ListItem.Title>{aluno.nome}</ListItem.Title>
                                <ListItem.Subtitle>{aluno.sobrenome}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
        </ScrollView>
    );
};

export default ListAluno;