import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Card } from 'react-native-paper';

const RegisterPage = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleImagePick = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 0.5 },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const handleRegister = () => {
    if (!name || !email || !password || !imageUri) {
      Alert.alert('Error', 'Please fill all fields and select an image.');
    } else {
      Alert.alert('Success', 'Registration Successful');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.form}>
        <Text style={styles.text}>Register</Text>
        <View>
          {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
        <TouchableOpacity style={styles.imageButton} onPress={handleImagePick}>
          <Text style={styles.imageButtonText}>Pick an image</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="black"
          value={name}
          onChangeText={(text) => setName(text)}
        />
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
          placeholder="Enter your password"
          placeholderTextColor="black"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  imageButton: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  imageButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: ""
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10,
    alignSelf: "center",
    marginBottom: 10,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default RegisterPage;
