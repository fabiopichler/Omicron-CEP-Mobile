import React from 'react';
import { NavigationStackProp } from 'react-navigation-stack';
import { NavigationRoute } from 'react-navigation';

export interface IHomeDrawerProps {
    children?: React.ReactNode;
    navigation: NavigationStackProp<NavigationRoute>;
}
