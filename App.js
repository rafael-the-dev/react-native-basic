import { useCallback, useState } from "react";
import { Alert, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import Header from "./components/header";
import TodoItem from "./components/todo-item";
import AddTodo from "./components/add-todo";

import SandBox from "./components/sandbox";

const App = () => {
    const [ todos, setTodos ] = useState([
        { key: "1", text: "Buy coffee" },
        { key: "2", text: "Finish todos app " }
    ]);
    
    const deleteHandler = useCallback(id => () => {
        setTodos(currentTodos => currentTodos.filter(todo => todo.key !== id))
    }, []);

    const dismissKeyboardHandler = useCallback(() => {
        Keyboard.dismiss();
    }, [])

    const addTodo = useCallback(text => {
        if(text.length > 3) {
            setTodos(currentTodos => [ 
                ...currentTodos,
                { key: `${currentTodos.length + 1}`,text }, 
            ]);
        } else {
            Alert.alert("Ooops", "Todos must be over 3 chars long", [
                { text: "Understood", onPress: () => console.log("alert closed")}
            ])
        }
    }, [])

    const getItem = useCallback(({ item }) => (
        <TodoItem 
            { ...item } 
            id={item.key}
            deleteHandler={deleteHandler}
        />
    ), [ deleteHandler ]);

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboardHandler}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo addTodo={addTodo} />
                    <View style={styles.list}>
                        <FlatList 
                            data={todos}
                            renderItem={getItem}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
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

/**
 * <TouchableWithoutFeedback onPress={dismissKeyboardHandler}>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <AddTodo addTodo={addTodo} />
                    <View style={styles.list}>
                        <FlatList 
                            data={todos}
                            renderItem={getItem}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
*/