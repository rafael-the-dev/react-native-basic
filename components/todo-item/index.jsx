import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const TodoItem = ({ deleteHandler, id, text }) => {

    return (
        <TouchableOpacity onPress={deleteHandler(id)}>
            <Text style={styles.text}>
                { text }
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        borderColor: "bbb",
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth: 1,
        marginTop: 16,
        padding: 16
    }
})

export default TodoItem;