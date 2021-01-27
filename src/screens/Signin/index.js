import React, { useEffect } from 'react';
import {
    Text, View,
    TouchableOpacity, StatusBar, I18nManager
} from "react-native";
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-community/async-storage';
import util from '../../utils';
const Signin = (props) => {
    const handleLanguageChange = lang => {
        AsyncStorage.setItem("lang", lang)
            .then(data => {
                RNRestart.Restart();
            })
            .catch(err => {
                console.log("err");
            });

    }
    console.log("isRtl==>",I18nManager.isRTL)
    return (
        <View style={{ flex: 1 ,alignItems:'center'}}>
            <StatusBar barStyle="dark-content"
            />
            <View style={{height:100,width:100,backgroundColor:'red',alignSelf:'flex-end'}}>
                </View>
            <Text style={{textAlign:'right',color:'red'}}>Welcome in Signin</Text>
            <Text>{util.t('title')}</Text>
            <TouchableOpacity 
            
            style={{height:50,width:'50%',borderWidth:2,
            backgroundColor:'red',alignItems:'center',justifyContent:'center',marginVertical:20}}
            onPress={() => handleLanguageChange('ar-Us')}>
                <Text>Change language</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{height:50,width:'50%',borderWidth:2,backgroundColor:'red',
                alignItems:'center',justifyContent:'center'}}
            onPress={() => props.navigation.navigate("Signup")}>
                <Text>GO to signup</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Signin;