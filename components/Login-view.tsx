import { useState } from "react";
import { TextInput, View, Text, Button ,SafeAreaView} from "react-native";
//import AsyncStorage from '@react-native-async-storage/async-storage';

//ADAM STUFF
export default function LoginView(props:{updateUser:Function}){

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')

    // async function login(){
    //     await AsyncStorage.setItem("user",JSON.stringify({username,role:"Temp"}))
    //     props.updateUser({username,role:"Temp"})
    // }



    
    // return(<View>
    //     <Text>username</Text>
    //     <TextInput onChangeText={t=>setUsername(t)} placeholder="gatorfan"/>

    //     <Text>Passowrd</Text>
    //     <TextInput onChangeText={t=>setPassword(t)} placeholder="supersecret"/>
    //     <Button onPress={login} title="LOGIN"/>

    // </View>
    
    
    // )
return(
    <SafeAreaView>
            <TextInput 
            style={{
                backgroundColor:'#ffffff'
            }}
              
           // onChangeText={onUsername}
            value={username}
            placeholder="Example Username"
            />
            <TextInput
            style={{
                backgroundColor:'#ffffff'
            }}
            placeholder="Example Password"
           // onChangeText={onPassword}
            value= {password}
             
            />
           {/* <Button onPress={login} title="LOGIN"/> */}
          </SafeAreaView>

)
}