import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ForgotPasswordUser } from '../../../reducer/actions/userActions';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        dispatch(ForgotPasswordUser(email));
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.text}>Forgot Password !</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    placeholderTextColor="black"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleForgotPassword}
                    disabled={!email}
                >
                    <Text style={styles.buttonText}>Send Reset Link</Text>
                </TouchableOpacity>
            </View >
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#262626',
    },
    form: {
        alignItems: 'center',
        backgroundColor: 'gray',
        width: '80%',
        borderRadius: 25,
        padding: 20,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        marginBottom: 20,
    },
    input: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 30,
        marginBottom: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        width: '90%',
    },
    button: {
        height: 50,
        backgroundColor: 'black',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        width: '50%',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
})