import React from 'react';
import { View, StyleSheet} from 'react-native';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho nome="Paola" curso="Design Digital"/>
      <Corpo/>
      <Disciplina nome="Projeto Integrado"/>
      <Disciplina nome="Concepção e Desenvolvimento de Produto"/>
      <Disciplina nome="Sociedade, Cultura e Tecnologia"/>
      <Disciplina nome="Marketing"/>
      <Disciplina nome="Projeto de Interfaces para Dispositivos Móveis"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
