import Banner from '@/components/Banner';
import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

export default function Register() {

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
    const schema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, "First name must be at least 2 characters")
            .matches(/^[a-zA-Z]+$/, "First name can only contain letters")
            .required("First name is required"),
        lastName: Yup.string()
            .min(2, "Last name must be at least 2 characters")
            .matches(/^[a-zA-Z]+$/, "Last name can only contain letters")
            .required("Last name is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], "Passwords must match")
            .required("Confirm Password is required"),
    });
    return (
        <ScrollView style={styles.container}>
            <Banner />
            <View style={styles.bodyContainer}>
                <View style={[styles.formContainer, {width: width}]}>
                    {/* Formik form will go here */}
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                        validationSchema={schema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
                            <>
                                <View>
                                    <TextInput
                                        placeholder="First Name"
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.firstName}
                                        style={styles.textInput}
                                    />
                                    {touched.firstName && errors.firstName && (
                                        <Text style={{ color: 'red', marginBottom: 5 }}>{errors.firstName}</Text>
                                    )}

                                    <TextInput
                                        placeholder="Last Name"
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur('lastName')}
                                        value={values.lastName}
                                        style={styles.textInput}
                                    />
                                    {touched.lastName && errors.lastName && (
                                        <Text style={{ color: 'red', marginBottom: 5 }}>{errors.lastName}</Text>
                                    )}
                                </View>

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
                                
                                <TextInput
                                    placeholder="Password"
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry
                                    style={styles.textInput}
                                />
                                {touched.password && errors.password && (
                                    <Text style={{ color: 'red', marginBottom: 5 }}>{errors.password}</Text>
                                )}
                                
                                <TextInput
                                    placeholder="Confirm Password"
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry
                                    style={styles.textInput}
                                />
                                {touched.confirmPassword && errors.confirmPassword && (
                                    <Text style={{ color: 'red', marginBottom: 5 }}>{errors.confirmPassword}</Text>
                                )}
                                
                                <TouchableOpacity onPress={handleSubmit as any} style={styles.contentBox}>
                                    Register
                                </TouchableOpacity>
                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </ScrollView>
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
