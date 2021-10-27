import React from 'react'
import { Text, View } from 'react-native'

function Cabecalho(props) {
    return (
      <View>
        <Text style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 40 }}>
          {props.nome}
        </Text>
        <Text style={{ alignSelf: 'center', color: 'black', fontWeight: 'bold', fontSize: 30 }}>
          {props.curso}
        </Text>
      </View>
    )
}

export default Cabecalho;

