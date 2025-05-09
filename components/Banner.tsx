import { Image, StyleSheet, View } from "react-native";



export default function Banner() {
    return (
        <View style={styles.imageContainer}>
            <Image source={require("../assets/images/banner.jpg")} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 300,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});