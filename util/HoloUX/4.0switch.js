import { useState } from "react";
import { View, Text, Touchable, Button as ButtonRN, TouchableWithoutFeedback, Pressable } from "react-native";

export function Switch4(props){

    const { children, flag, onPress } = props;
    const [hoverState, setHoverState] = useState(false);
    return(
        <Pressable style={{backgroundColor:hoverState ? "#6B6B6B":"#262626", borderRadius:2, borderColor:hoverState ? "#FEFEFE5A" : "#9B9B9B70",borderWidth:hoverState ? 1 : 0,borderTopWidth:1,margin:20 }} onPress={onPress} onPressIn={()=>setHoverState(true)} onPressOut={()=>setHoverState(false)}>
            <Text style={{color:"white",padding:20,textAlign:"center",textAlignVertical:"center"}}>
                {children}
            </Text>
            <View style={{width:20,height:2,backgroundColor: flag ? "#FFFFFFFF" : "black",position:"absolute",borderRadius:2,bottom:5,left:0,right:0,margin:"auto"}} />
        </Pressable>
    )
}