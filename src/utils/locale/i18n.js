import {I18nManager} from 'react-native';
import * as RNLocalize from "react-native-localize"
import i18n from "i18n-js";
import AsyncStorage from '@react-native-community/async-storage';
import ar from './ar';
import en from './en';
import fr from './fr';
// console.log("getLocalues==>",RNLocalize.getLocales())
// console.log("localies==>", RNLocalize.getLocales()[1].languageTag)
i18n.fallbacks = true;
i18n.translations = { en, ar, fr };
const getData=async()=>{
const result= await AsyncStorage.getItem("lang");
if(result==='ar-Us')
{
console.log("result===>arabic",result)
  i18n.locale='ar-Us'
  I18nManager.forceRTL(true)
}
else{
  console.log("result==>english",result)
  i18n.locale=result
  I18nManager.forceRTL(false)
}
}

getData();



export default i18n;