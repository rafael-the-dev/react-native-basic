import { useCallback, useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

const App = () => {
    const [ people, setPeople ] = useState([
        { key: "1", name: "Rafael Tivane" },
        { key: "2", name: "Lopes Rafael" },
        { key: "3", name: "Egness Da Flo" },
        { key: "4", name: "Hilario Vicente" },
        { key: "5", name: "Arnaldo Manecusse" }
    ]);

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    people.map(person => (
                        <View key={person.key}>
                            <Text style={styles.item}>{ person.name }</Text>
                        </View>
                    ))
                }
            </ScrollView>
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