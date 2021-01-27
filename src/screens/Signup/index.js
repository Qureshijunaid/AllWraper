import React from 'react';
import {
    Text, View, StyleSheet,
    TouchableOpacity,StatusBar, Alert
} from "react-native";
import HandleBack from '../../utils/Back';
const Signup = (props) => {
    const onBack=()=>{
        Alert.alert(  
            'Do you want ',  
            'Close',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => {},  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => props.navigation.goBack()},  
            ],  
            {cancelable:false}
        ); 
       return true
    }

    return (
        <HandleBack onBack={()=>onBack()}>
        <View style={{ flex: 1, justifyContent:'center'}}>
            <StatusBar barStyle="dark-content"
            />

            <Text>Welcome in Signup</Text>
        </View>
        </HandleBack>
    );
}

export default Signup;