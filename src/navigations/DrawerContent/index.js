import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity, StatusBar
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            {...props}
            showsVerticalScrollIndicator={false}
            bounces={false}
        >
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Welcome in Drawer</Text>
            </View>
        </DrawerContentScrollView>
    );
}

export default DrawerContent;