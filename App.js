import { useCallback, useState } from "react"
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

const image = { uri: "assets/image-header.jpg" };

export default function App() {
    

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="cover"
                source={require("./assets/image-header.jpg")}
                style={styles.imageBackground}>
                <Text style={styles.text}>Some random text</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF",
    fontSize: '2rem'
  }
});
