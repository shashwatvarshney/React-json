// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator } from  '@react-navigation/stack';
// import React from 'react';
// import axios from 'axios'
// const url='http://10.0.2.2:3000/user'
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   TextInput,
//   StatusBar,TouchableOpacity,
//   ActivityIndicator
  
// } from 'react-native';
// // import { TextInput ,} from 'react-native-paper';
// export default class store extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name:'',
//             pass:''
//         }
//     }
   
//     render(){
//         return(
//         <View>
//             <TextInput placeholder="name" onChangeText={(name)=>this.setState({name})}/>
//             <TextInput placeholder="pass" onChangeText={(pass)=>this.setState({pass})}/>
//             <TouchableOpacity  onPress={this.login}>
//                     <Text>login</Text>
//             </TouchableOpacity>
//         </View>
        
//         )
        
        
//     }
//     login=()=>{
//         let user={}
//         user.name=this.state.name
//         user.pass=this.state.pass
//         console.log(user.name)
//         axios.post(url,{
//             method:'post',
//             headers:{
//                 "Accept":"application/json",
//                 "Content-Type":"application/json"

//             },
//             body:JSON.stringify(user)
//         })
//     }

// }