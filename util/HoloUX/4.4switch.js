import { useState } from "react";
import { View, Text, Touchable, Button as ButtonRN, TouchableWithoutFeedback, Pressable } from "react-native";

export function Switch44(props){

    const { children, flag, onPress, on, off } = props;
    const [hoverState, setHoverState] = useState(false);
    return(
        <View style={{flexDirection:"row", margin:20,}}>
            {children && [
            <Text style={{color:"white",textAlign:"center",textAlignVertical:"center",}}>{children}</Text>,
            <View style={{flex:1}} />]}
            <Pressable style={{width:120,height:30, backgroundColor:"#262626",  flexDirection:"row", alignContent:"center", alignItems:"center", userSelect:"none"  }} onPress={onPress} onPressIn={()=>setHoverState(true)} onPressOut={()=>setHoverState(false)}>
                <View style={{width:60, height:30,  borderColor: "#9B9B9B70",borderTopWidth:flag ? 0 : 1, flexDirection:"row", alignContent:"center", alignItems:"center", backgroundColor: flag ? "#262626" : "#535353"}}>
                    <Text style={{display: flag ? "none" : "unset",flex:1,color:"white", textAlign:"center",textAlignVertical:"center"}}>{off || "Off"}</Text>
                </View> 
                <View style={{width:60, height:30, borderColor: "#9B9B9B70",borderTopWidth:flag ? 1 : 0, flexDirection:"row", alignContent:"center", alignItems:"center", backgroundColor: flag ? "#0681A6" : "#262626"}}>
                    <Text style={{display: flag ? "unset" : "none",flex:1,color:"white", textAlign:"center",textAlignVertical:"center"}}>{on || "On"}</Text>
                </View>
            </Pressable>    
        </View>
    )
}