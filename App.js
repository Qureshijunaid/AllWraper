import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { navigationRef } from './src/navigations/NavigationService';
// import AuthStack from "./src/navigations/Stack/AuthStackScreen";
// import AppStack from './src/navigations/Stack/AppStackScreen';
// import SplashStack from './src/navigations/Stack/SplashScreenStack';
import MyTest from './src/screens/MyTest/MyTest';
const App = () => {
  
  // useEffect(() => {
  //   console.log("UseEffect")
  //   setTimeout(() => {
  //     setData({
  //       ...data,
  //       isLogin: false,
  //       switchApp:{
  //         isLoading:false
  //       }
  //     })
  //   }, 1000)
  // }, [])

  const [data, setData] = useState({
    isLogin: false,
    switchApp: {
      isLoading: true,
    }
  })

  console.log("yes")
  return (
    // <NavigationContainer ref={navigationRef}>
    //   {
    //     data.switchApp.isLoading ?
    //       <SplashStack />
    //       :
    //       (
    //         data.isLogin ?
    //           <AppStack />
    //           :
    //           <AuthStack />
    //       )
    //   }

    // </NavigationContainer>
    <MyTest/>
  );
};



export default App;
