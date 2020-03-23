// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import {createStackNavigator } from  '@react-navigation/stack';
// import React from 'react';
// const url='http://10.0.2.2:3000/user'
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,TouchableOpacity,
//   ActivityIndicator
  
// } from 'react-native';
// export default class readdata extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             isLoading:true,
//             data:null
//         }
//     }
//     componentDidMount(){
//        return fetch(url)
//         .then((response)=>response.json()
//         )
//        .then((responsejsn)=>{
//         console.log(responsejsn)
//            this.setState({
//                isLoading:false,
//                data:responsejsn
//            })

//        })
//         .catch(e=>{
//             console.log(e)
//         })
//     }
//     render(){
//         // return(<Text>loaded</Text>)
//         if(this.state.isLoading){
//             return (<View>
//                 <ActivityIndicator/>
//             </View>
//             )
//         }
//         else{
//             let name=this.state.data.map((val,key)=>{
//                 return <View key={key}>
//                     <Text>{val.name}</Text>
//                 </View>
//             })
//             console.log(name)
//             return(
//                 <View>
//                     {name}
//                 </View>
//             )

//         }
        
//     }
// }