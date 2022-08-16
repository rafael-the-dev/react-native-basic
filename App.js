import { useCallback, useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import Card from "./components/country-card";

export default function App() {
    const [ data, setData ] = useState([]);

    const fetchData = useCallback(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(countries => setData(countries))
            .catch(console.error)
    }, []);

    useEffect(() => {
        fetchData();
    }, [ fetchData ])
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={({ item }) => <Card { ...item } />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#FFF",
    fontSize: '2rem'
  }
});
