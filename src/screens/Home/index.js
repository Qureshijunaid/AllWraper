import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity, StatusBar
} from "react-native";
const Home = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent:'center'}}>
            {/* <StatusBar barStyle="dark-content"
            /> */}
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text>Open drawer</Text>
                </TouchableOpacity>
            <Text>Welcome in Home</Text>
        </View>
    );
}

export default Home;