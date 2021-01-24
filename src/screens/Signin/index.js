import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity,StatusBar
} from "react-native";
const Signin = () => {
    return (
        <View style={{ flex: 1, justifyContent:'center'}}>
            <StatusBar barStyle="dark-content"
            />

            <Text>Welcome in Signin</Text>
        </View>
    );
}

export default Signin;