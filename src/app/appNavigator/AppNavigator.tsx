import { createAppContainer, } from 'react-navigation';
import { createStackNavigator, StackViewTransitionConfigs } from 'react-navigation-stack';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import CepScreen from '../screens/cepScreen/CepScreen';
import AddressScreen from '../screens/addressScreen/AddressScreen';
import AboutScreen from '../screens/aboutScreen/AboutScreen';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Cep: { screen: CepScreen },
        Address: { screen: AddressScreen },
        About: { screen: AboutScreen },
    }, {
        initialRouteName: 'Home',
        headerMode: 'none',
        transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
    }
);

export default createAppContainer(AppNavigator);
