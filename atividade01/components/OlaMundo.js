import React, { Component } from 'react'
import { Text, View } from 'react-native'

class OlaMundo extends Component {
  render() {
    //codigo JSX aqui
    return (
      <View>
        <Text style={{ alignSelf: 'center', fontSize: 15, fontWeight: 'bold' }}>
          "Ola Mundo! Primeira aula de React Native!"
        </Text>
      </View>
    )
  }
}

export default OlaMundo
