import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HouseScreen from '../screens/HouseScreen';
import CodeScreen from '../screens/CodeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TestScreen from '../screens/TestScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="HouseScreen" component={HouseScreen} />
          <Stack.Screen options={{headerShown: false}} name="WelcomeScreen" component={WelcomeScreen}/>
          <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
          <Stack.Screen options={{headerShown: false}} name="CodeScreen" component={CodeScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

