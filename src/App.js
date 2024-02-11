
import { trigger } from "react-native-haptic-feedback";
import {View,Pressable,Text,StyleSheet,Image,ImageBackground,Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import S from "./S1";
import S2 from "./S2";
import S3 from "./S3";


 
const Stack=createNativeStackNavigator();
function Home(){
    
    return(
       
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Home" component={S}/>
          <Stack.Screen name="Settings" component={S2}/>
          <Stack.Screen name="About" component={S3}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
 
export default Home;

/*export default function S3(){
  return (
    <View style={{flex:1}}>
      
      <S2/>
      
    </View>
  );
}*/






// Optional configuration






/*const Home =()=>{
  
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  

return (

<View style={styles.container}>
    <ImageBackground source={require('./p.jpeg')} resizeMode="cover" style={styles.image}>
     
     <Pressable onPress={()=>{
trigger("impactHeavy",options);
<View><S2/></View>
     }} >
     
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
             ]} 
  });
export default Home;
*/


