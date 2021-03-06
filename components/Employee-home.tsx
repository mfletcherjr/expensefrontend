import { Text, View, Button,TextInput, Image, ActivityIndicator, ScrollView, Modal, SafeAreaView } from "react-native";
import { useState } from "react";
import React from "react";
import RequestHandler from "./Handler";
import { Expense } from "./Entities";

export function EmployeeHomePage(props){
    const setIndex:Function =props.setIndex;
    const services:RequestHandler = props;


/**
    display an employee's information into a table
    id
    first name
    last name
    expenses array
    submitted expenses statuses
*/
function EmployeeInfo(uid:string){





}//end EmployeeInfo


/**
    create new expense submission
    
    expenseId to be auto-generated by UUID
    requires user to enter: description and amount
    date to be auto-generated with Date in International format

*/
function CreateExpense(request:Expense){






}//end Create Expense


return(
<View><Text>Employee Home Page</Text>
    <View style={{backgroundColor:"#4b71bd", padding:5, height:500, width:1150, alignItems:"stretch",justifyContent:"center"}}>
    <View style={{alignItems:"stretch"}}>
        <View><Text style={{fontSize:25}}>Welcome Employee Name here</Text></View>
        <View style={{flexDirection:"row", flex:1}}>
            <View style={{flex:1}}/>

            <View style={{flex:6, padding:5, paddingRight:10}}>
                    <View style={{flex:6,flexDirection:"row"}} >         
                        <View style={{flex:3,backgroundColor:"#72D6D8"}}> <Text>Id</Text></View>  
                        <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Expense</Text></View>
                        <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Description</Text></View>
                        <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Status</Text></View>
                    </View>
                        <View style={{flexDirection:"row"}}  >
                        <View style={{flex:3,flexDirection:"row",backgroundColor:"white"}}><Text>b331815a-7e96-42d0-afd3-851366d732a3</Text></View>
                        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>$2000</Text></View>
                        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>I need my guap back</Text></View>
                        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>Pending</Text></View>

                    </View>
            </View>

            <View style={{flex:1}}/>
        </View>
        <Button onPress={()=>setIndex(0)} title="Create New Expense"></Button>
    </View>

    </View>

</View>)




}//end EmployeeHomePage