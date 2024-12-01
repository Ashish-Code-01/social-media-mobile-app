import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { getAllUser } from "../../../reducer/actions/userActions"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const handelSearchUser = () => {
    dispatch(getAllUser(name))
  };

  const { users } = useSelector((state) => (state.auth))

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.text}>Search User</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name to Search"
          keyboardType="name"
          placeholderTextColor="black"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handelSearchUser}
          disabled={!name}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View >
    </View>
  )
}

export default Search

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
    minHeight: "50%",
    maxHeight: "90%"
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