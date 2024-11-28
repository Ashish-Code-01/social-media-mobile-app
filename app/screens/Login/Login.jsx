import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { LoginUser } from '../../../reducer/actions/actions';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { Authenticated = false, isLoading = false, error = null } = useSelector(
    (state) => state.auth || {}
  );
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    dispatch(LoginUser(email, password));
  };
  useEffect(() => {
    if (error) {
      Alert.alert('Error', error?.message || 'An unexpected error occurred.');
      dispatch({ type: 'CLEAR_ERROR' });
    }
  }, [error, Authenticated, navigation, dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          placeholderTextColor="black"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          placeholderTextColor="black"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login
          </Text>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            <Text style={styles.link}>Don't have an account? Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

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
    width: '70%',
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
  buttonDisabled: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginTop: 15,
  },
  link: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Login;
