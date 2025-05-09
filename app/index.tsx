import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../components/Banner";

export default function Index() {
  return (
    // ScrollView is used to make the screen scrollable
    <ScrollView style={styles.container}>
    {/* Image container for the banner */}
      {/* <View style={styles.imageContainer}>
        <Image source={require("../assets/images/banner.jpg")} style={styles.image}/>
      </View> */}
      <Banner />

      {/* Body container for the content */}
      <View style={styles.bodyContainer}>
        <Text style={styles.paragraph}>If you already have an account, please log in to continue.</Text>
        <Text style={styles.paragraph}>New here? Register now to create your account and get started.</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
          <Link href="/login" style={styles.contentBox}>Login</Link>
          <Link href="/register" style={styles.contentBox}>Register</Link>
        </View>
      </View>

    </ScrollView>
  );
}

// css for the above component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // image container
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
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  contentBox: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    padding: 20,
    margin: 10,
    textAlign: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#000",
    color: "#fff",
  },
  paragraph: {
    margin: 12,
    fontSize: 18,
    textAlign: "center",
  },
});
