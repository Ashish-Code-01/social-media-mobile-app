import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { LoadUser } from '../reducer/actions/userActions';
import HomeScreen from './screens/Home/Home';
import LoginScreen from './screens/Login/Login';
import RegisterScreen from './screens/Register/Register';
import CreatePostScreen from './screens/CreatPost/CreatePost';
import ProfileScreen from './screens/Profile/Profile';
import SearchScreen from './screens/Search/Search';
import ForgotPasswordScreen from './screens/ForgotPassword/ForgotPassword';
import Footer from './components/Footer';
import CameraScreen from './screens/Camera/Camera';
import Loader from './components/Loader';

const Stack = createNativeStackNavigator();

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadUser());
    }, [dispatch]);

    const { Authenticated, isLoading } = useSelector((state) => state.auth);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <Stack.Navigator initialRouteName={Authenticated ? "HomeScreen" : "LoginScreen"}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
            {Authenticated ? <Footer /> : ""}
        </>
    );
};

export default App;
