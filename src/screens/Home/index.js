import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity, StatusBar
} from "react-native";
const Home = () => {
    return (
        <View style={{ flex: 1, justifyContent:'center'}}>
            {/* <StatusBar barStyle="dark-content"
            /> */}
            <Text>Welcome in Home</Text>
        </View>
    );
}

export default Home;