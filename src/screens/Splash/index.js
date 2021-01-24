import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity, StatusBar
} from "react-native";

const Splash = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar barStyle="dark-content"
            />

            <Text>Welcome in Splash</Text>
        </View>
    );
}

export default Splash;