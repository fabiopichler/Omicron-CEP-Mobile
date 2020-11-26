import React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import CepScreen from '../screens/cepScreen/CepScreen';
import AddressScreen from '../screens/addressScreen/AddressScreen';
import AboutScreen from '../screens/aboutScreen/AboutScreen';

const AppStack = createStackNavigator();

const AppNavigator: React.FC = () => (
    <NavigationContainer>
        <AppStack.Navigator
            headerMode="none"
            initialRouteName="Home"
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
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
    </NavigationContainer>
);

export default AppNavigator;
