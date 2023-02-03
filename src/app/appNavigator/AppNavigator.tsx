import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import CepScreen from '../screens/cepScreen/CepScreen';
import AddressScreen from '../screens/addressScreen/AddressScreen';
import AboutScreen from '../screens/aboutScreen/AboutScreen';

const AppStack = createNativeStackNavigator();

const AppNavigator: React.FC = () => (
    <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
    >
        <AppStack.Screen
            name="Home"
            component={HomeScreen}
        />

        <AppStack.Screen
            name="Cep"
            component={CepScreen}
        />

        <AppStack.Screen
            name="Address"
            component={AddressScreen}
        />

        <AppStack.Screen
            name="About"
            component={AboutScreen}
        />
    </AppStack.Navigator>
);

export default AppNavigator;
