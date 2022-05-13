import { useState } from "react";
import { View, Text, Touchable, Button as ButtonRN, TouchableWithoutFeedback, Pressable } from "react-native";

export function Switch44(props){

    const { children, flag, onPress } = props;
    const [hoverState, setHoverState] = useState(false);
    return(
        <Pressable style={{width:120,height:30, backgroundColor:"#262626", margin:20, flexDirection:"row", alignContent:"center", alignItems:"center" }} onPress={onPress} onPressIn={()=>setHoverState(true)} onPressOut={()=>setHoverState(false)}>
            <View style={{width:60, height:30,  borderColor: "#9B9B9B70",borderTopWidth:flag ? 0 : 1, flexDirection:"row", alignContent:"center", alignItems:"center", backgroundColor: flag ? "#262626" : "#535353"}}>
                <Text style={{display: flag ? "none" : "unset",flex:1,color:"white", textAlign:"center",textAlignVertical:"center"}}>Off</Text>
            </View> 
            <View style={{width:60, height:30, borderColor: "#9B9B9B70",borderTopWidth:flag ? 1 : 0, flexDirection:"row", alignContent:"center", alignItems:"center", backgroundColor: flag ? "#0681A6" : "#262626"}}>
                <Text style={{display: flag ? "unset" : "none",flex:1,color:"white", textAlign:"center",textAlignVertical:"center"}}>On</Text>
            </View>
        </Pressable>
    )
}