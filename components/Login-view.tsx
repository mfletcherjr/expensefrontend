import { useState } from "react";
import { TextInput, View, Text, Button ,SafeAreaView} from "react-native";
import { EmployeeHomePage } from "./Employee-home";
import { Employee } from "./Entities";
import RequestHandler from "./Handler";
import { ManagerHomePage } from "./Manager-home";
//import AsyncStorage from '@react-native-async-storage/async-storage';

//ADAM STUFF
export default function LoginView(props){

    const {setIndex, loggedIn} = props;

    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handler = new RequestHandler();

    async function loginAttempt() {
        
        // logic to retrieve employee from backend
        // attribute isManager will dictate whether or not
        // loginAttempt will point to Mgr or Emp page
        // upon success
       const anEmployee = await handler.Login(username,password);
       loggedIn(anEmployee);
      // console.log(anEmployee);
        if (anEmployee.isManager) {
            //where we set the employee type
            //render appropriate page response based on type
            //console.log("Hello");
            setIndex(1)
        } else {
            setIndex(2);
        }
        
    }

return(
    <SafeAreaView>
            <TextInput 
            style={{
                backgroundColor:'#ffffff'
            }}
              
           // onChangeText={onUsername}
            value={username}
            placeholder="Example Username"
            onChangeText={u=>setUsername(u)}
            />
            <TextInput
            style={{
                backgroundColor:'#ffffff'
            }}  
            value= {password}
            placeholder="Example Password"
            onChangeText={p=>setPassword(p)}
          
             
            />
         
           
           <Button onPress={loginAttempt} title="Login"></Button>
          </SafeAreaView>

)
}


