import {View,Image,ImageBackground,Text,Button, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToggleSwitch from 'toggle-switch-react-native';


function S3({navigation}){
  const [status1, setStatus1] = React.useState(false);
  const [status2, setStatus2] = React.useState(false);
  const [status3, setStatus3] = React.useState(false);
  const [status4, setStatus4] = React.useState(false);
  const [status5, setStatus5] = React.useState(false);
  const [status6, setStatus6] = React.useState(false);
  const [status7, setStatus7] = React.useState(false);
  const [status8, setStatus8] = React.useState(false);
  const [status9, setStatus9] = React.useState(false);
  const [status10, setStatus10] = React.useState(false);
  const [status11, setStatus11] = React.useState(false);
 const route=useRoute();
  return(
<View style={{flex:1}}>
  <ImageBackground source={require("./s2.png")} resizeMode="repeat" style={{flex:1}}>
    <View style={styles.con1}>
    <Text style={styles.t1}>Hello {route.params.text2},</Text>
    <Text style={styles.t2}>I am {route.params.text}</Text>
    <Text style={styles.t3}>Tell Me: Which of the following apps are installed on your mobile?</Text>
   <View style={styles.con2}>
    <ScrollView >
      <Image source={require("./to.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status1} onColor="green"
  offColor="red"  onToggle={()=>{status1===false?setStatus1(true):setStatus1(false)}} />
  </View>
      <Image source={require("./li.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status2} onColor="green"
  offColor="red"  onToggle={()=>{status2===false?setStatus2(true):setStatus2(false)}} />
  </View>
      <Image source={require("./wh.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status3} onColor="green"
  offColor="red"  onToggle={()=>{status3===false?setStatus3(true):setStatus3(false)}} />
  </View>
      <Image source={require("./te.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status4} onColor="green"
  offColor="red"  onToggle={()=>{status4===false?setStatus4(true):setStatus4(false)}} />
  </View>
      <Image source={require("./yu.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status5} onColor="green"
  offColor="red"  onToggle={()=>{status5===false?setStatus5(true):setStatus5(false)}} />
  </View>
      <Image source={require("./sp.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status6} onColor="green"
  offColor="red"  onToggle={()=>{status6===false?setStatus6(true):setStatus6(false)}} />
  </View>
      <Image source={require("./br.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status7} onColor="green"
  offColor="red"  onToggle={()=>{status7===false?setStatus7(true):setStatus7(false)}} />
  </View>
      <Image source={require("./ch.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status8} onColor="green"
  offColor="red"  onToggle={()=>{status8===false?setStatus8(true):setStatus8(false)}} />
  </View>
      <Image source={require("./in.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status9} onColor="green"
  offColor="red"  onToggle={()=>{status9===false?setStatus9(true):setStatus9(false)}} />
  </View>
      <Image source={require("./sig.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status10} onColor="green"
  offColor="red"  onToggle={()=>{status10===false?setStatus10(true):setStatus10(false)}} />
  </View>
      <Image source={require("./fb.png")} resizeMode="contain" style={{width:80},{height:80}}/>
      <View style={{transform:[
    {translateX:220},
      {translateY:0},
      ]}}>
      <ToggleSwitch isOn={status11} onColor="green"
  offColor="red"  onToggle={()=>{status11===false?setStatus11(true):setStatus11(false)}} />
  </View>
    </ScrollView>
    </View>
    </View>
    <View style={{transform:[{translateX:0},{translateY:90}]}}>
    <Button title='Save' color="green" //onPress={()=>navigation.navigate('Home',)}
    />
    </View>
    </ImageBackground>
</View>
  );
}
const styles=StyleSheet.create({
con2:{
  borderWidth:3,
  borderColor:"blue",
  height:500,
  width:350,
  borderTopLeftRadius: 20,
borderTopRightRadius: 20,
borderBottomLeftRadius:20,
borderBottomRightRadius:20,
  transform:[
    {translateX:20},
      {translateY:70},
      ]
},
con1:{
  justifyContent:"center",
  alignSelf:"auto"
},
t1:{
  textAlign:"center",
  fontSize:25,
  color:"magenta"
},
t2:{
  textAlign:"center",
  fontSize:35,
  color:"blue",
  transform:[
   
      {translateY:20},
      ]
},
t3:{
  textAlign:"center",
  fontSize:20,
  color:"black",
  //fontWeight:'bold',
  transform:[
    {translateX:2},
      {translateY:40},
      ]
}
});
export default S3;