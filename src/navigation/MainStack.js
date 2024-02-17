import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import LoginScreen from '../screens/login/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MainScreen from '../screens/main/MainScreen';
import SettingsScreen from '../screens/setting/SettingsScreen';

const stack = createNativeStackNavigator();
export default function MainStack(props) {
  return (
    <stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: 'Main Screen' }}
      />
      <stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Screen' }}
      />
      <stack.Screen
        name="Profile"
        component={SettingsScreen}
        options={{ title: 'Setting Screen' }}
      />
    </stack.Navigator>
  );
}
