import { Text, View, Button,TextInput, Image, ActivityIndicator, ScrollView, Modal, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import RequestHandler from "./Handler";
import React from "react";
import { Employee } from "./Entities";


export function ManagerHomePage(){
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [process, updated] = useState("");

    const handler = new RequestHandler();

    useEffect(() => {
        ShowAllEmployees()
        return () => {};},[]);
/** 
takes in an expense and changes state
from pending to either approved or rejected
original status code is number which returns string value
would be nice to display stanley for pending/approve/reject states

*/
async function UpdateExpense(){



}//end updateExpense


/**
calls up entire employee roster and displays information into a table

render order id, fname, lname, username, expense[]

*/
async function ShowAllEmployees(){
    
    const roster = await handler.GetRoster()
    setEmployees(roster);
    console.log(roster);
    const output = roster.map((item)=>
    <View>
        <View><Text>Employee Info</Text></View>
    <View><Text>{item.id}</Text></View>
    <View><Text>{item.fname}</Text></View>
    <View><Text>{item.lname}</Text></View>
    <View><Text>{item.expenses}</Text></View>
    </View>
    )
    
    
    return ({output})


    
}//end showAllEmployees


// useEffect(()=>{
//     handler.GetRoster().then(roster=>setEmployees(roster))
// },[])

// return(
//      <View>
//     <FlatList data={employees} renderItem={({item})=>DispEmployee(item)} keyExtractor={item=>item.id}/>
//     </View>

// )

// function DispEmployee(props:Employee){
//     return(
//     <View>
//         <Text>ID {props.id} First name {props.fname} Last name {props.lname} Expenses {props.expenses} </Text>
//     </View>)
// }



return (<View><Text>Manager Home Page</Text>
    <View style={{backgroundColor:"#4b71bd", padding:5, height:500, width:1150, alignItems:"stretch",justifyContent:"center"}}>
        <View style={{flexDirection:"row"}}  >
            <View style={{flex:3,backgroundColor:"#72D6D8"}}> <Text>Id</Text></View>  
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>First name</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Last name</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Expense</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Description</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Status</Text></View>
         
        </View>
            <View><Button onPress={()=>ShowAllEmployees()} title="Roster"></Button></View>

        <View style={{flexDirection:"row"}}  >
        <View style={{flex:3,flexDirection:"row",backgroundColor:"white"}}><Text></Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text></Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text></Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text></Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text></Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text></Text></View>
        </View>
    
    
    
    </View>
    
</View>)






}//end ManagerHomePage