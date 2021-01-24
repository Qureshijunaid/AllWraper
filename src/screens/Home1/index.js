import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity, StatusBar
} from "react-native";
const HomeOne = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent:'center'}}>
            {/* <StatusBar barStyle="dark-content"
            /> */}
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text>Open drawer i Home 1</Text>
                </TouchableOpacity>
            <Text>Welcome in Home 1 is here</Text>
        </View>
    );
}

export default HomeOne;