import { Link } from "expo-router";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import {
    Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View
} from "react-native";
import * as Yup from "yup";
import Banner from "../../components/Banner";

export default function Login() {

    // useState to manage the width of the form container
    const [width, setWidth] = useState(350);

    const handleResize = () => {
        const screenWidth = Dimensions.get("window").width;
        switch (true) {
            case screenWidth > 1000:
                setWidth(500);
                break;
            case screenWidth > 400:
                setWidth(450);
                break;
            default:
                setWidth(350);
                break;
        }
    }

    // Add event listener to handle screen resize
    Dimensions.addEventListener("change", handleResize);
    
    // Set the initial width of the form container
    useEffect(() => { handleResize();}, []);

    // Add Yup validation schema here
    // Email vlidation cannot be empty and must be a valid email
    // Password validation cannot be empty and must be at least 6 characters long
    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

  return (
    <View style={styles.container}>
        <Banner />
        <View style={styles.bodyContainer}>
            <View style={[styles.formContainer, {width: width}]}>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                    validationSchema={schema}
                >
                    {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                        <>
                            <TextInput
                                placeholder="Email"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                style={styles.textInput}
                            />
                            { /* Add error message for email here */}
                            {touched.email && errors.email && (
                                <Text style={{ color: "red", marginBottom: 5 }}>{errors.email}</Text>
                            )}
                            
                            <TextInput
                                placeholder="Password"
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                secureTextEntry
                                style={styles.textInput}
                            />
                            { /* Add error message for password here */}
                            {touched.password && errors.password && (
                                <Text style={{ color: "red", marginBottom: 5 }}>{errors.password}</Text>
                            )}

                            {/* <Button style={styles.contentBox} onPress={handleSubmit as any} title="Login" /> */}
                            <TouchableOpacity
                                onPress={handleSubmit as any}
                                style={styles.contentBox}
                            >Login</TouchableOpacity>
                        </>
                    )}
                </Formik>

                <Link href="/(auth)/passwordReset" style={{ paddingTop: 10, color: "blue" }}>Password Reset</Link>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },
    formContainer: {
        marginTop: 20,
    },
    textInput: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    contentBox: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
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
});