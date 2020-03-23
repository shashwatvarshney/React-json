import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {TouchableOpacity,Text,View,StyleSheet} from 'react-native'

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,Image
} from 'react-native';
export default class home extends React.Component{
    render(){
        return(
          <View style={styles.continer}>
              <View style={styles.acocunt}>
              <Text style={styles.text}>Food Items</Text>
              </View>
              <View style={styles.acocunt}>
                  <Image style={styles.logo} 
                  source={require('../files/images/dosa.jpg')}/>
              <Text style={styles.text}>Dosa</Text>
              </View>
              <View style={styles.acocunt}>
              <Image style={styles.logo} 
                  source={require('../files/images/idli.png')}/>
              <Text style={styles.text}>Idli</Text>
              </View>
              <View style={styles.acocunt}>
              <Image style={styles.logo} 
                  source={require('../files/images/meals.png')}/>
              <Text style={styles.text}>Full Meals</Text>
              </View>

        </View>
      );
}
}
const styles=StyleSheet.create({
    continer:{
        backgroundColor:'#64b5f6',
        flex:1,
        alignItems:'center',
        alignContent:'center'
    },
    account:{
        alignItems:'flex-start',
        paddingLeft:40,
        paddingTop:40,
        // backgroundColor
        alignItems:'center',
        
        
    },
    text:{
        fontSize:20,
        padding:20,
        
        
    },
    logo:{
        paddingTop:20,
        height:100,
        width:200
    }
})