import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home/Home';
import LoginScreen from './screens/Login/Login';
import RegisterScreen from './screens/Register/Register';
import Footer from './components/Footer';
import CreatePostScreen from './screens/CreatPost/CreatePost';
import ProfileScreen from './screens/Profile/Profile';
import SearchScreen from './screens/Search/Search';

const Stack = createNativeStackNavigator();
const _layout = () => {
  return (<>    <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="CreatePostScreen" component={CreatePostScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
    <Footer />
  </>
  );
};

export default _layout;


