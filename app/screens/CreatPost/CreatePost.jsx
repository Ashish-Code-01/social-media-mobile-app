import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const submitHandler = async () => {
    console.log("Post created with:", { caption, image });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Create Post</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Pick an image</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter your Captions"
          placeholderTextColor="black"
          value={caption}
          onChangeText={(text) => setCaption(text)}
        />
        <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;

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
    marginTop: 20,
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
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
