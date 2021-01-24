import React from 'react';
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../../screens/Home';
import Signup from '../../../screens/Signup';
import DrawerContent from '../../DrawerContent';
const AppStackScreen = createStackNavigator();
const Drawer = createDrawerNavigator();
 export const StackScreens = ({ navigation }) => {
    return (
        <AppStackScreen.Navigator
            gestureEnabled={false}
            // headerMode='none'
        >
            <AppStackScreen.Screen
                name='Home'
                component={Home}
                options={{
                    headerRight: () => (
                        <Button title="press" onPress={() => navigation.toggleDrawer()} />
                    ),
                }}
            />
        </AppStackScreen.Navigator>
    );
}

const AppStack = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            edgeWidth={0}
            drawerPosition='left'
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="StackScreens"
                component={StackScreens}
                
            />
        </Drawer.Navigator>

    )
}

export default AppStack;


