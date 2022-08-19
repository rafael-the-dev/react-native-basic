import { useCallback, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"

const AddTodo = ({ addTodo }) => {
    const [ value, setValue ] = useState("");

    const onChangeTextHandler = useCallback(text => setValue(text), []);
    const onPressHandler = useCallback(() => {
        setValue(currentValue => {
            addTodo(currentValue);
            return "";
        })
    }, [])

    return (
        <View>
            <TextInput
                onChangeText={onChangeTextHandler}
                placeholder="New todo"
                style={styles.input}
                value={value}
            />
            <Button 
                color= "coral"
                onPress={onPressHandler}
                title="Add todo"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "#DDD",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6
    }
})

export default AddTodo;