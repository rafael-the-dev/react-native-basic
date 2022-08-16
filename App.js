import { useCallback, useState } from "react"
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [ number, setNumber ] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ number }</Text>
            <View style={styles.buttonsContainer}>
                <Button 
                    title="+"
                />
                <Button 
                    title="-"
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
    fontSize: '2rem',
    fontWeight: "bold"
  },
  buttonsContainer: {
    marginTop: "1.5rem"
  }
});
