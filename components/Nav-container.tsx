import { Text, View, Button,TextInput, Image, ActivityIndicator, ScrollView, Modal, SafeAreaView } from "react-native";
import { useState } from "react";
import React from "react";
import { ManagerHomePage } from "./Manager-home";
import { EmployeeHomePage } from "./Employee-home";
import { Employee } from "./Entities";


// export default function LoginView(){ //props:{updateUser:Function}

//     const [username,setUsername] = useState('')
//     const [password, setPassword] = useState('')



export default function NavContainer(){//props:Employee

    
// props.username
// props.password
    const [index, setIndex] = useState(0);

    const UserPassInput = (props:Employee) => {
        const [username, onUsername] = React.useState();
        const [password, onPassword] = React.useState();
      
        return (
          <SafeAreaView>
            <TextInput 
            style={{
                backgroundColor:'#ffffff'
            }}
              
           // onChangeText={onUsername}????
            value={username}
            placeholder="Example Username"
            />
            <TextInput
            style={{
                backgroundColor:'#ffffff',
                
            }}
            placeholder="Example Password"
           // onChangeText={onPassword}
            value= {password}
             
            />
          </SafeAreaView>
        );
      
    }

    // function UpdateUser(props:Employee){}

    function showNav(){
        switch (index) {
            case 0:{
                return (
                    <View><Text style={{fontSize:20, fontFamily:"Helvetica"}}>Welcome to Norwegian International Corporate Expense Management Systems</Text>
                    <UserPassInput />
                    {/* <ManagerHomePage /> */}
                    {/* <EmployeeHomePage setIndex={setIndex}/> */}
                    <Button onPress={()=>setIndex(1)} title="Login"></Button>
                    </View>)
            }
            case 1:{ 

                
                return (
                <View>
                        <ManagerHomePage/>
                
                
                
                
                
                
                </View>)

            }
            case 2:{
                return(<View><Text>Employee Page</Text><Button onPress={()=>setIndex(2)} title="Default Page"></Button></View>)

            }
        
            case 3:{
                return(<View><Text>Create New Expense</Text><Button onPress={()=>setIndex(3)} title="Default Page"></Button></View>)
            }
            
        }


    }
    return<View style={{backgroundColor:"#4b71bd", padding:5, height:800, width:1300, alignItems:"center",justifyContent:"center"}}>{showNav()} </View>
    



}//end NavContainer


