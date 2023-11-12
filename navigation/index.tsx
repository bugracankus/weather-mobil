import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ---- SCREENS ---- // 
import HomePage from '../screens/HomePage';



const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='HomePage'
            screenOptions={{
                headerShown: false
            }}
        >
        <Stack.Screen
            name ="HomePage"
            component={HomePage}
        />        
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}