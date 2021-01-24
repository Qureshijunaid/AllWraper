import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../../../screens/Splash';
const SplashScreenStack = createStackNavigator();
const SplashStack = () => {
    return (
        <SplashScreenStack.Navigator>
            <SplashScreenStack.Screen
                name='SplashStack'
                component={Splash}
            />
        </SplashScreenStack.Navigator>
    );

}

export default SplashStack;