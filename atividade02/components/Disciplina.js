import React from 'react'
import { Text, View } from 'react-native'

function Disciplina(props) {
    return (
      <View>
        <Text style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 15 }}>
          {props.nome}
        </Text>
      </View>
    )
}

export default Disciplina;

