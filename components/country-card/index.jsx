import { Image, StyleSheet, View } from "react-native";



const Card = ({ flags }) => {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: flags.svg }} 
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16
    },
    image: {
        height: 250
    }
})

export default Card;