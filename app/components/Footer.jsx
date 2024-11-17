import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Ionicons name="home-outline" size={24} color="white" style={styles.icons} onPress={() => navigation.navigate('HomeScreen')} />
            <Ionicons name="search-sharp" size={24} color="white" style={styles.icons} onPress={() => navigation.navigate('SearchScreen')} />
            <Ionicons name="create" size={24} color="white" style={styles.icons} onPress={() => navigation.navigate('CreatePostScreen')} />
            <Ionicons name="person" size={24} color="white" style={styles.icons} onPress={() => navigation.navigate('ProfileScreen')} />
        </View>
    );
}

export default Footer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icons: {
        marginHorizontal: 40
    },

});
