import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import axios from 'axios'
const url="http://10.0.2.2:3000/user"
export default class RegForm extends React.Component
{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:''
        }
    }
    render()
    {
        return(
            <View style={StyleSheet.regform}>
                <Text style={StyleSheet.header}>Registration</Text>

                <TextInput style={StyleSheet.textinput} placeholder="Your name"
                onChangeText={(name)=>this.setState({name})}
                underlineColorAndroid={'transparent'}/>

<TextInput style={StyleSheet.textinput} placeholder="Your email" onChangeText={(email)=>this.setState({email})}
                underlineColorAndroid={'transparent'}/>

<TextInput style={StyleSheet.textinput} placeholder="password" onChangeText={(password)=>this.setState({password})}
                secureTextEntry={true} underlineColorAndroid={'transparent'}/>

                <TouchableOpacity style={styles.button}
                onPress={this.register}
                >
                    <Text style={styles.btntext}>Sign up
                    </Text>
                </TouchableOpacity>



                

            </View>
        );
    }
    register=()=>{
        axios.post(url,{
            id:this.state.email,
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        })
        .then(response=>{
            console.log(response.data)
        })
        .catch(e=>console.log(e))
    }

    
}
    


const styles=StyleSheet.create({
    regform:
    {
        alignSelf:'stretch',
    },

    header:{
        fontSize:24,
        color:'#fff',
        paddingBottom:40,
        marginBottom:40,
        borderBottomColor:'#199187',
        borderBottomWidth:1,
    },

    textinput:
    {
        alignSelf:'stretch',
        height:40,
        marginBottom:30,
        color:'#673ab7',
        borderBottomColor:'#f8f8f8',
        borderBottomWidth:1,
    },
    button:{
        alignSelf:'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor:'#59cbbd',
        marginTop:30,
    },
    btntext:{
        color:'#fff',
        fontWeight:'bold',
    }
})