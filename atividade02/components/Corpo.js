import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 300,
    },
});

let imageUrl = "../assets/me.jpeg"

function Corpo() {
    return (
      <View>
        <Image
            style={styles.image}
            source={require(imageUrl)}
        />
      </View>
    )
}

export default Corpo;