import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const TodoItem = ({ deleteHandler, id, text }) => {

    return (
        <TouchableOpacity onPress={deleteHandler(id)}>
            <View style={styles.item}>
                <MaterialIcons color="#333" name="delete" size={23} />
                <Text style={styles.text}>
                    { text }
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        borderColor: "bbb",
        borderRadius: 10,
        borderStyle: "dashed",
        borderWidth: 1,
        flexDirection: "row",
        marginTop: 16,
        padding: 11
    },
    text: {
        marginLeft: 7
    }
})

export default TodoItem;