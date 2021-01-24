import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigations/NavigationService';
import AuthStack from "./src/navigations/Stack/AuthStackScreen";
import AppStack from './src/navigations/Stack/AppStackScreen';
import SplashStack from './src/navigations/Stack/SplashScreenStack';
const App = () => {
  useEffect(() => {
    console.log("UseEffect")
    setTimeout(() => {
      setData({
        ...data,
        isLogin: true
      })
    }, 10000)
  }, [])

  const [data, setData] = useState({
    isLogin: false
  })
  
  console.log("yes")
  return (
    <NavigationContainer ref={navigationRef}>
      {data.isLogin ? <AppStack /> : <AuthStack />}


    </NavigationContainer>
  );
};



export default App;
