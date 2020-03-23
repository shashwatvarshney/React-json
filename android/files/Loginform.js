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
    Image,
    TextInput,
    TouchableOpacity
    
  } from 'react-native';

  export default class Loginform extends React.Component
  {
      constructor(props){
          super(props)
      }
      render()
      {
          return(
              <View style={styles.container}>
                  <TextInput 
                  placeholder="username or email"
                  placeholderTextColor='blue'
                  onSubmitEditing={()=>this.passwordInput.focus()}
                  style={styles.input}
                  />
                  <TextInput 
                   placeholder="password"
                   placeholderTextColor='blue'
                   secureTextEntry
                   
                  style={styles.input}
                  ref={(input)=>this.passwordInput=input}
                  />

                  <TouchableOpacity style ={styles.buttonContainer}

                //   onPress={this.form}
                onPress={()=>this.props.navigation.navigate('loginhome')}
                  >
                      
                      <Text style={styles.buttonText}>
                          LOGIN
                      </Text>
                  </TouchableOpacity>
                  

              </View>
          );
      }
      form=()=>{
        //   return(
            this.props.navigate('loginhome')
        //   )
        //   alert("hi")
      }
   
  }
  
  const styles=StyleSheet.create({
      container:
      {
            padding:20
      },
      input:{
          height:40,
          backgroundColor:'rgba(255,255,255,0.7)',
          marginBottom:20,
          color:'black',
          paddingHorizontal:20
      },
      buttonContainer:
      {
          backgroundColor:'red',
          paddingVertical:10
      },
      buttonText:
      {
          textAlign:'center',
          color:'white'
          
      }

  })
    
