import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Signup from '../../../screens/Signup';
import Signin from '../../../screens/Signin';
const AuthStackScreen = createStackNavigator();
const AuthStack = ({ navigation }) => {
    return (
        <NavigationContainer>
            <AuthStackScreen.Navigator
                headerMode='none'
            >

                <AuthStackScreen.Screen
                    name='Signin'
                    component={Signin}
                    options={{
                        gestureEnabled: false,
                    }}
                />
                <AuthStackScreen.Screen
                    name='Signup'
                    component={Signup}
                    options={{
                        gestureEnabled: false,
                    }}
                />

            </AuthStackScreen.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;
