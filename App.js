import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Header from "./components/header";

const App = () => {
    const [ todos, setTodos ] = useState([
        { key: "1", text: "Buy coffee" },
        { key: "2", text: "Finish todos app " }
    ]);

    const getItem = useCallback(({ item }) => (
        <View>
            <Text>{ item.text }</Text>
        </View>
    ), []);

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <View style={styles.list}>
                    <FlatList 
                        data={todos}
                        renderItem={getItem}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 40
    },
    list: {
        marginTop: 20
    }
});

export default App;