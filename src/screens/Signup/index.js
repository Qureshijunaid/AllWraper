import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity,StatusBar
} from "react-native";
const Signup = () => {
    return (
        <View style={{ flex: 1, justifyContent:'center'}}>
            <StatusBar barStyle="dark-content"
            />

            <Text>Welcome in Signup</Text>
        </View>
    );
}

export default Signup;