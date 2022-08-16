import { useCallback, useState } from "react"
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [ number, setNumber ] = useState(0);

    const increaseHandler = useCallback(() => setNumber(currentNumber => {
        console.log(currentNumber); return currentNumber + 1;
    }), []);
    const decreaseHandler = useCallback(() => setNumber(currentNumber => currentNumber - 1), []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{ number }</Text>
            <View style={styles.buttonsContainer}>
                <Button 
                    onPress={increaseHandler}
                    title="+"
                />
                <Button 
                    onPress={decreaseHandler}
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
