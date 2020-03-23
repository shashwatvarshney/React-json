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
  StatusBar,
  
} from 'react-native';
import Login from './android/files/Login';
import Loginform from './android/files/Loginform';
import home from './android/files/home'
import loginhome from './android/files/loginhome';
import RegForm from './android/files/RegForm';

// import read from './android/files/readata';
// import store from './android/files/store';


import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const Stack = createStackNavigator();

export default class App extends React.Component{
  render()
  {
    return(
     
      <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="store" component={store} />
      <Stack.Screen name="read" component={read} /> */}
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="loginform" component={Loginform} />
        <Stack.Screen name="RegForm" component={RegForm} />
        
        <Stack.Screen name="loginhome" component={loginhome} />
        
      </Stack.Navigator>
    </NavigationContainer>

 
    );
  }
}