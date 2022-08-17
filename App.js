import { useCallback, useState } from "react";
import { FlatList, StyleSheet, ScrollView, Text, TouchableOpacity, View } from "react-native";

const App = () => {
    const [ people, setPeople ] = useState([
        { key: "1", name: "Rafael Tivane" },
        { key: "2", name: "Lopes Rafael" },
        { key: "3", name: "Egness Da Flo" },
        { key: "4", name: "Hilario Vicente" },
        { key: "5", name: "Arnaldo Manecusse" }
    ]);

    const pressHandler = useCallback(prop => () => {
        console.log(prop);
    }, [])

    const getItem = useCallback(({ item }) => (
        <TouchableOpacity onPress={pressHandler(item.name)}>
            <Text style={styles.item}>{ item.name }</Text>
        </TouchableOpacity>
    ), [ pressHandler ])

    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                renderItem={getItem} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    item: {
        backgroundColor: "pink",
        fontSize: 24,
        marginTop: 20,
        padding: 30
    }
})

export default App;