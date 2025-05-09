import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';
import Banner from "../../components/Banner";

export default function PasswordReset() {

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
        

    return (
        <View style={styles.container}>
            <Banner />
            <View style={styles.bodyContainer}>
                <View style={[styles.formContainer, {width: width}]}>
                    {/* Formik form will go here */}
                    <Formik
                        initialValues={{ email: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email('Invalid email')
                                .required('Email is required'),
                        })}
                    >
                        {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                            <>
                                <TextInput
                                    placeholder="Email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    style={styles.textInput}
                                />
                                {touched.email && errors.email && (
                                    <Text style={{ color: 'red', marginBottom: 5 }}>{errors.email}</Text>
                                )}
                                <TouchableOpacity
                                    onPress={handleSubmit as any}
                                    style={styles.contentBox}
                                >
                                    Reset Password
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
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
        marginBottom: 10,
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