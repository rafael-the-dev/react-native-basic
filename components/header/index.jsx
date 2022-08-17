import { StyleSheet, Text, View } from "react-native"

const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My todos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        height: 80,
        paddingTop: 38
    },
    title: {
        color: "#FFF",
        fontSize: "1.3rem",
        fontWeight: "bold",
        textAlign: "center"
    }
})

export default Header;