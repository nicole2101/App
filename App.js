import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, ClientSignup, TrainerSignup, Welcome, Who, HomeScreen, Profiles, MapView} from "./screens";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyTabs from './navigation/MyTabs';
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Welcome'
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Who"
          component={Who}
          options= {{
            headerShown: false
          }}
          />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ClientSignup"
          component={ClientSignup}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
        name="TrainerSignup"
        component={TrainerSignup}
        options={{
        headerShown: false
        }}
        />
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Profiles"
        component={Profiles}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="MapView"
        component={MapView}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name= 'My Tabs'
        component={MyTabs}
        />
        </Stack.Navigator>
        
    </NavigationContainer>
  );
}