import { Text, View, Button,TextInput, Image, ActivityIndicator, ScrollView, Modal, SafeAreaView } from "react-native";
import { useState } from "react";
import React from "react";

export function ManagerHomePage(){


/** 
takes in an expense and changes state
from pending to either approved or rejected
original status code is number which returns string value
would be nice to display stanley for pending/approve/reject states

*/
function UpdateExpense(){



}//end updateExpense


/**
calls up entire employee roster and displays information into a table

render order id, fname, lname, username, expense[]

*/
function ShowAllEmployees(){





}//end showAllEmployees









return (
    <View style={{alignItems:"stretch"}}>
        <View style={{flexDirection:"row"}}  >
            <View style={{flex:3,backgroundColor:"#72D6D8"}}> <Text>Id</Text></View>  
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>First name</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Last name</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Expense</Text></View>
            <View style={{flex:1,backgroundColor:"#72D6D8"}}> <Text>Description</Text></View>
        </View>

        <View style={{flexDirection:"row"}}  >
        <View style={{flex:3,flexDirection:"row",backgroundColor:"white"}}><Text>ID Value</Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>Joe</Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>Ice</Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>$2000</Text></View>
        <View style={{flex:1,flexDirection:"row",backgroundColor:"white"}}><Text>Description</Text></View>

        </View>
    
    
    
    
</View>)






}//end ManagerHomePage