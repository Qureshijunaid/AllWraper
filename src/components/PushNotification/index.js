import React,{useEffect} from 'react';
import { Text,View,TouchableOpacity } from "react-native";
import PushNotification from "react-native-push-notification";
const Notification=()=>{
    const [state,setState]=React.useState(false)
    useEffect(()=>{
        console.log("useEffect")
        PushNotification.configure({
            onRegister: function (token) {
              console.log("TOKEN:", token);
            },
            onNotification: function (notification) {
              console.log("NOTIFICATION:", notification);
              PushNotification.localNotificationSchedule({
                channelId: "Test_Channel",
                title: 'MyApp',
                message: 'You have a new message',
                text: 'testing',
                soundName: 'default',
                date: new Date(Date.now() + 1 * 1000) // in 1 secs
              });
              notification.finish(PushNotificationIOS.FetchResult.NoData);
            },
            onAction: function (notification) {
              console.log("ACTION:", notification.action);
              console.log("NOTIFICATION:", notification);
            },
            onRegistrationError: function(err) {
              console.error(err.message, err);
            },
            permissions: {
              alert: true,
              badge: true,
              sound: true,
            },
            popInitialNotification: true,
            requestPermissions: Platform.OS === 'ios'
          });
    },[state])

    const handleLocalNotification=async()=>{  
        console.log("handleLocalNotification===>")
        PushNotification.localNotificationSchedule({
            channelId: "Test_Channel",
            title: 'MyApp',
            message: 'You have a new message',
            text: 'testing',
            soundName: 'default',
            date: new Date(Date.now() + 1 * 1000) // in 1 secs
          });
          setState(!state)      
    }
    return(
        <View style={{ flex: 1, justifyContent:'center',alignItems:'center'}}>
            <Text>Welcome Notification</Text>
            <TouchableOpacity 
            style={{width:'40%',height:50,backgroundColor:'red'}}
            onPress={()=>handleLocalNotification()}>
                <Text>PushNotification</Text>
                </TouchableOpacity>
            </View>
    )
}

export default Notification;