import { useCallback, useEffect, useState } from "react"
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { useFetch } from "./hooks/useFetch"

import Card from "./components/country-card";

export default function App() {
    
    const { data, loading } = useFetch({ url: "https://restcountries.com/v3.1/all" });

    if(loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
    
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
    loadingContainer: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
    },
    loadingText: {
        fontSize: "1.3rem"
    },
    container: {
        flex: 1,
        padding: "32rem 5% 0 5%"
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
