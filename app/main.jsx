import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/Home';
import LoginScreen from './screens/Login/Login';
import RegisterScreen from './screens/Register/Register';
import CreatePostScreen from './screens/CreatPost/CreatePost';
import ProfileScreen from './screens/Profile/Profile';
import SearchScreen from './screens/Search/Search';
import ForgotPasswordScreen from './screens/ForgotPassword/ForgotPassword';
import Footer from './components/Footer';
import CameraScreen from './screens/Camera/Camera';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MY_PROFILE_REQUEST } from "../reducer/reducer/reducer"

const Stack = createNativeStackNavigator();

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GET_MY_PROFILE_REQUEST())
    }, [dispatch])


    const { Authenticated = false, isLoading = false, error = null } = useSelector(
        (state) => state.auth || {}
    );
    return (
        <>
            <Stack.Navigator initialRouteName={Authenticated ? "LoginScreen" : "HomeScreen"}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
            </Stack.Navigator >
            {Authenticated ? "" : <Footer />}
        </>
    )
}

export default App;
