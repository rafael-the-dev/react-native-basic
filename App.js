import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
             {
                people.map(person => (
                    <View key={person.key}>
                        <Text>{ person.name }</Text>
                    </View>
                ))
             }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 20
    }
})

export default App;