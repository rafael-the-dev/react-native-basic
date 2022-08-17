import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Header from "./components/header";
import TodoItem from "./components/todo-item";

const App = () => {
    const [ todos, setTodos ] = useState([
        { key: "1", text: "Buy coffee" },
        { key: "2", text: "Finish todos app " }
    ]);

    
    const deleteHandler = useCallback(id => () => {
        setTodos(currentTodos => currentTodos.filter(todo => todo.key !== id))
    }, []);

    const getItem = useCallback(({ item }) => (
        <TodoItem 
            { ...item } 
            id={item.key}
            deleteHandler={deleteHandler}
        />
    ), [ deleteHandler ]);

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