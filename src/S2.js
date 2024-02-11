
import { trigger } from "react-native-haptic-feedback";
import {View,Pressable,Text,StyleSheet,Platform,Image,ImageBackground, Animated, TextInput,Button} from 'react-native';
import React, {useRef, useState} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'


function S2({navigation}){
  const [text,setText]=useState("");
  const [text2,setText2]=useState("");
  const Route=useRoute();
  
  
    return(
      
      <View style={styles.heading}>
    <ImageBackground source={require("./s3.jpg")} resizeMode="cover" style={styles.image}>
  <Text style={styles.t1}>CONFIGURATIONS</Text>
 
  <View  style={styles.container}>
    <Text style={styles.t2}>Enter A Name </Text>
    <Text style={styles.t3}>For your Assistant :</Text> 
    
    <View style={styles.con2}>
<TextInput placeholder="Name me" style={styles.i} onChangeText={newText=>setText(newText)}/>
</View>
<Text style={styles.t4}>Your Name :</Text> 
<View style={styles.con3}>

<TextInput placeholder="Your Name" style={styles.i} onChangeText={newText=>setText2(newText)}/>
</View>

<View style={{flex:1},{transform:[
        {translateX:1},
          {translateY:150},
          ]}}>
<Button title="Enter" color="magenta" onPress={()=>

navigation.navigate('About',{text,text2,})

}/>
</View>

</View>
</ImageBackground>
</View>

    );
  }

  const styles = StyleSheet.create({
    heading:{
      flex: 1,
      alignSelf:"center"
    },
    container: {
      flex: 0.7,
      borderWidth: 2,
      width:350,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      //alignSelf:"center",
      //justifyContent:"center",
      transform:[
        {translateX:10},
          {translateY:120},
          ]
    },
    con2:{
      //flex:0.1,
      borderWidth: 1,
      width:250,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      transform:[
        {translateX:45},
          {translateY:40},
          ]
    },
    con3:{
      //flex:0.1,
      borderWidth: 1,
      width:250,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,
      transform:[
        {translateX:45},
          {translateY:100},
          ]
    },
    image:{
      flex:2,
    },
    t1: {
      color:"red",
      textAlign:"center",
      fontSize:48,
     fontStyle:'italic',
     textDecorationLine:'underline'
    },
    t2:{
     // height:100,
      //width:100,
      alignSelf: 'center' ,
      
      color:"blue",
      fontSize:35,
      fontWeight:'bold',
      fontStyle:'italic',
      textDecorationLine:'underline'
    },
    t3:{
      alignSelf: 'center' ,
       color:"blue",
       fontSize:30,
       transform:[
        {translateX:5},{translateY:30}
       ]
     },
     t4:{
      //alignSelf: 'center' ,
       color:"blue",
       fontSize:30,
       transform:[
        {translateX:45},
          {translateY:90},
          ]
     },
     i:{
      fontWeight:'bold',
      fontStyle:'italic',
       color:"green",
       fontSize:20,
       padding: 20,
       
     }
    
    
  });
  
export default S2;
  