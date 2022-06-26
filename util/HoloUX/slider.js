import { useEffect, useState } from "react";
import { View } from "react-native";

export function Slider(props){
    const [pp, setPP] = useState(10);
    /* useEffect(()=>{

    },[pp]); */
    return(
        <View style={{height:60, width:800}}>
            <View style={{width:"100%",flex:1}}/>
            <View style={{width:"100%",paddingHorizontal:30, overflow:"hidden"}}>
                <View style={{width:"100%",height:2, overflow:"hidden"}} >
                    <View style={{width:"100%",height:"100%",backgroundColor:"#6B6B6B",position:"absolute"}} />
                    <View style={{width:pp+"%",height:"100%",backgroundColor:"#3EC6FF",position:"absolute"}} />    
                </View>
            </View>
            <View style={{width:"100%",flex:1}}/>
            <View style={{height:30,width:30,borderRadius:30,backgroundColor:"#3EC6FF50", position:"absolute",top:0,bottom:0, left:((800-60)/100*pp)+15,marginVertical:"auto"}} >
                <View style={{height:15,width:15,borderRadius:15,backgroundColor:"#3EC6FF", position:"absolute",top:0,bottom:0, left:0, right:0,margin:"auto"}} />
                
            </View>
            <input type="range" class="volume input-range" value="-4" min="-21" max="-1" step="any"></input>
        </View>
    )
}