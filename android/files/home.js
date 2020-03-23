
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from  '@react-navigation/stack';
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,TouchableOpacity
  
} from 'react-native';
export default class home extends React.Component{
    render(){
        return(
            <View>
                <Text>Welcome</Text>
                <TouchableOpacity 
                //   onPress={this.form}
                onPress={()=>this.props.navigation.navigate('loginhome')}
                  >
                      
                      <Text >
                          LOGIN
                      </Text>

                     
                  </TouchableOpacity>

            </View>
          )
    }
}