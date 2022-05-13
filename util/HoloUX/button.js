import { useState } from "react";
import { View, Text, Touchable, Button as ButtonRN, TouchableWithoutFeedback, Pressable } from "react-native";
import { TouchableNativeFeedback, TouchableOpacity } from "react-native-web";
export function Button(props){
    const { children } = props;
    const [hoverState, setHoverState] = useState(false);
    return(
        <Pressable style={{backgroundColor:hoverState ? "#6B6B6B":"#262626", borderRadius:2, borderColor:hoverState ? "#FEFEFE5A" : "#9B9B9B70",borderWidth:hoverState ? 1 : 0,borderTopWidth:1,margin:20 }} onPress={()=>console.log("hoge")} onPressIn={()=>setHoverState(true)} onPressOut={()=>setHoverState(false)}>
            <Text style={{color:"white",padding:20,textAlign:"center",textAlignVertical:"center"}}>
                {children}
            </Text>
        </Pressable>
    )
}