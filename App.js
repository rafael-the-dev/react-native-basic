import { useCallback, useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [ value, setValue ] = useState("");

    const onChangeHandler = useCallback((text) => {
        setValue(text);
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ value }</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    onChangeText={onChangeHandler}
                    placeholder="Insert text here"
                    style={styles.input}
                    value={value}
                />
            </View>
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
  text: {
    fontSize: '1.2rem',
    fontWeight: "bold"
  },
  inputContainer: {
    marginTop: '1.4rem'
  },
  input: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
    height: 40,
    padding: 10
  }
});
