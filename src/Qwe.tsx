i
import { trigger } from "react-native-haptic-feedback";
import {View,Pressable,Text,StyleSheet,Platform,Image,ImageBackground, Animated} from 'react-native';
import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


// Optional configuration




const m = new Animated.ValueXY({x:150 ,y:380});

const S =()=>{
  
 
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  
  const Move = () => {
       Animated.timing(m, {
     toValue:{x:500,y:100},
      duration: 15000,
      useNativeDriver: true,
    }).start();
  };

return (

<View style={styles.container}>
    <ImageBackground source={require('./p.jpeg')} resizeMode="cover" style={styles.image}>
     
        
      <Pressable onPress={()=>{
        trigger("impactHeavy",options);
        navigation.navigate('S2')
        
      }}
     >
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
            {translateY:380},
            
          
      ]
    
    },
    logo1:{
      height:100,
      width:100,
      //alignSelf: 'center' 
    
        transform:[
          {translateX:150},
            {translateY:380}
          
      ]}
    
    
  });
export default S;
