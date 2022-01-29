import { Text, View, Button,TextInput, ActivityIndicator, ScrollView, Modal } from "react-native";
import { useState } from "react";
import React from "react";





export function NavContainer(){

    const [index, setIndex] = useState(0);


    function showNav(){
        switch (index) {
            case 0:{
                return (<View><Text>Flavor Text</Text><Button onPress={()=>setIndex(1)} title="Page 1"></Button></View>)
            }
            case 1:{
                return (<View><Text>Page 1 displayed</Text><Button onPress={()=>setIndex(0)} title="Page 2"></Button></View>)

            }
        
            default:{
                return(<View><Text>Secondary Text</Text><Button onPress={()=>setIndex(5)} title="Default Page"></Button></View>)
            }
            
        }


    }

    return showNav();






}//end NavContainer()