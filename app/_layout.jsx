import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from "react-redux"
import HomeScreen from './screens/Home/Home';
import LoginScreen from './screens/Login/Login';
import RegisterScreen from './screens/Register/Register';
import Footer from './components/Footer';
import CreatePostScreen from './screens/CreatPost/CreatePost';
import ProfileScreen from './screens/Profile/Profile';
import SearchScreen from './screens/Search/Search';
import ForgotPasswordScreen from './screens/ForgotPassword/ForgotPassword.jsx';
import { store } from '../reducer/store/store.js';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
const _layout = () => {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(GET_MY_PROFILE_REQUEST())
  }, [dispatch])

  const { isLoading, UserAuthenticated } = useSelector(state => state.UserAuthentication)
  return (<>
    <Provider store={store}>
      <Stack.Navigator initialRouteName={UserAuthenticated ? "HomeScreen" : "LoginScreen"}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
    <Footer />
  </>
  );
};

export default _layout;

