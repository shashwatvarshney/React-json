

import React from 'react';
import {KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
  
} from 'react-native';
import axios from 'axios';
 
import Loginform from './Loginform'

const url="http://10.0.2.2:3000/user"
export default class Login extends React.Component{
   constructor(props){
       super(props)
       this.state={
           username:"",
           password:"",
           data:{}
       }
   }
    
  render()
  {
    return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../files/images/i.png')}
                    />

                    <Text style={styles.title}>an app made for food ordereing system</Text>

            </View>

            <TextInput 
                  placeholder="username or email"
                  placeholderTextColor='blue'
                  
                  onChangeText={(username)=>this.setState({username})}
                  onSubmitEditing={()=>this.passwordInput.focus()}
                  style={styles.input}
                  />
                  <TextInput 
                   placeholder="password"
                   placeholderTextColor='blue'
                   secureTextEntry
                   onChangeText={(password)=>this.setState({password})}
                  style={styles.input}
                  ref={(input)=>this.passwordInput=input}
                  />

                  <TouchableOpacity style ={styles.buttonContainer}
                onPress={this.login}
                // onPress={()=>this.props.navigation.navigate('loginhome')}
                  >
                      
                      <Text style={styles.buttonText}>
                          LOGIN
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style ={styles.buttonContainer1}
                  
                  //   onPress={this.form}
                  onPress={()=>this.props.navigation.navigate('RegForm')}
                    >
                        
                        <Text style={styles.buttonText1}>
                            Register
                        </Text>
                    </TouchableOpacity>

                    
           
        
            </KeyboardAvoidingView>
 
        
     
    );
  }
  login=()=>{
      console.log(this.state.data.name)
      var user;
      axios.get(url+'/'+this.state.username)
      .then((response) =>{
        this.setState({
            data:response.data
            
        })
        console.log(response.data)
        
      })
      .catch(e=>{
          console.log(e)
      })
      console.warn(this.state.username,this.state.data.id,this.state.password,this.state.data.password)
      if(this.state.username==this.state.data.id && this.state.password==this.state.data.password){
        this.props.navigation.navigate('loginhome')
        //   alert("valid details")
      }
      else{
          alert("invalid")
      }
  }
  
}


const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#00e676',
        
    
    },
    logoContainer:
    {
        alignItems:"center",
        flexGrow:1,
        justifyContent:"center"

    },
    logo:{
        width:230,
        height:150,
        
    },
    title:
    {
        color:'white',
        marginTop:10
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
        
    },

    buttonText1:
    {
        textAlign:'center',
        color:'white'
    },
    buttonContainer1:
    {
        backgroundColor:'blue',
        paddingVertical:10
    }

})
      