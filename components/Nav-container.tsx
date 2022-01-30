import { Text, View, Button,TextInput, Image, ActivityIndicator, ScrollView, Modal, SafeAreaView } from "react-native";
import { useState } from "react";
import React from "react";






export function NavContainer(){

    const [index, setIndex] = useState(0);

    const UserPassInput = () => {
        const [username, onUsername] = React.useState();
        const [password, onPassword] = React.useState();
      
        return (
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
          </SafeAreaView>
        );
      };



    function showNav(){
        switch (index) {
            case 0:{
                return (
                    <View><Text>Place Image above this somehow Welcome to Norwegian International Corporate Expense Management Systems
                    Employee Login</Text>
                    <UserPassInput/>
                    <Button onPress={()=>setIndex(1)} title="Login"></Button>
                    </View>)
            }
            case 1:{
                return (<View><Text>Manager Page</Text><Button onPress={()=>setIndex(0)} title="Page 2"></Button></View>)

            }
        
            default:{
                return(<View><Text>Employee Page</Text><Button onPress={()=>setIndex(2)} title="Default Page"></Button></View>)
            }
            
        }


    }

    return showNav();

    

}//end NavContainer()