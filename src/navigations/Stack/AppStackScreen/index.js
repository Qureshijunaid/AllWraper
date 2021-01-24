import React from 'react';
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../screens/Home';
import Signup from '../../../screens/Signup';
import Signin from '../../../screens/Signin';
import DrawerContent from '../../DrawerContent';
const AppStackScreen = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const StackScreens = ({ navigation }) => {
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

const BottomTabScreen = ({navigation}) => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name='Home'
                component={Home}
                // options={{
                //     headerRight: () => (
                //         <Button title="press" onPress={() => navigation.toggleDrawer()} />
                //     )
                // }}
            />
            <BottomTab.Screen
                name='Signin'
                component={Signin}
            />
            <BottomTab.Screen
                name='Signup'
                component={Signup}
            />
        </BottomTab.Navigator>
    );
}

const AppStack = () => {
    return (
        <Drawer.Navigator
            // screenOptions={{
            //     headerShown: false
            // }}
            edgeWidth={0}
            drawerPosition='left'
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen
                name="StackScreens"
                component={BottomTabScreen}

            />
        </Drawer.Navigator>
    )
}

export default AppStack;


