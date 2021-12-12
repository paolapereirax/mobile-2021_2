import React, { useState } from "react";
import { Modal, StyleSheet, Text, View, Image, Button } from "react-native";

export default function Perfil(props) {
    const [modalVisible, setModalVisible] = useState(false);
    let nome = this.props.navigation.getParam('nome', 'nulo');
    let idade = this.props.navigation.getParam('idade', 'nulo');
    let email = this.props.navigation.getParam('email', 'nulo');
    
    return(
        <View style={styles.centeredView}>
            <Modal animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Perfil</Text>
                        <Image source={{uri: 'https://avatars.githubusercontent.com/u/47893411?v=4' }}></Image>
                        <Text style={styles.modalText}>Nome: { nome }</Text>
                        <Text style={styles.modalText}>Idade: { idade }</Text>
                        <Text style={styles.modalText}>Email: { email }</Text>
                        <Button style={styles.button} onPress={ () => this.props.navigation.navigate('Home'), () => setModalVisible(false) }>Home</Button>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });