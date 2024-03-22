import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Screens/Login';
import { StatusBar } from 'expo-status-bar';
import Home from './src/Screens/Home';
import { Colors } from './src/Utils/Colors';
import Search from './src/Screens/Search';
import SearchResult from './src/Screens/SearchResult';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: Colors.background
            },
            headerTintColor: 'white',
            headerLeft: () => <></>,
            headerTitle: '',
            headerShadowVisible: false
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerStyle: {
              backgroundColor: Colors.background
            },
            headerTintColor: 'white',
            headerTitle: 'Búsqueda',
            headerShadowVisible: false,
            animation: 'fade_from_bottom'
          }}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={{
            headerStyle: {
              backgroundColor: Colors.background
            },
            headerTintColor: 'white',
            headerTitle: 'Resultado de búsqueda',
            headerShadowVisible: false,
            animation: 'fade'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


