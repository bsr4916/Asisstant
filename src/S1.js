import { trigger } from "react-native-haptic-feedback";
import {View,Pressable,Text,StyleSheet,Image,ImageBackground} from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import S2 from "./S2";

function S({navigation}){
  
    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false,
    };
    
  
  return (
  
  <View style={styles.container}>
      <ImageBackground source={require('./p.jpeg')} resizeMode="cover" style={styles.image}>
       
       <Pressable onPress={()=>{
  trigger("impactHeavy",options);
  
  navigation.navigate('Settings',)
  
       }
       } >
       
     <Image source={require('./p2.png')} style={styles.logo0}/>
     </Pressable>
     
     
    
      </ImageBackground>
  </View>
  );}
  const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      image: {
        flex: 2,
        //ustifyContent: 'center',
      },
      logo0:{
        height:100,
        width:100,
        //alignSelf: 'center' 
      
          transform:[
            {translateX:150},
              {translateY:300},
               ]} 
    });
  export default S;
  
  
