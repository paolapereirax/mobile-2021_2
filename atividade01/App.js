import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import OlaMundo from './components/OlaMundo'
import Professor from './components/Professor'
import Aluno from './components/Aluno'

export default function App() {
  return (
    <View style={styles.container}>
      <OlaMundo />
      <Professor />
      <Aluno />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
