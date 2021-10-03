import React from 'react'
import { Text, View } from 'react-native'

function Aluno() {
  return (
    <View>
      <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold' }}>
        Nome: Paola Pereira
      </Text>
      <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold' }}>
        Idade: 21 anos
      </Text>
      <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold' }}>
        Cidade: Fortaleza
      </Text>
      <Text style={{ alignSelf: 'center', color: 'red', fontWeight: 'bold' }}>
        Curso: Design Digital
      </Text>
    </View>
  )
}

export default Aluno
