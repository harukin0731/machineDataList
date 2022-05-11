import React from "react"
import { Linking, Image, TouchableOpacity } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//最新情報カードの清々
export function RenderItem({item}){
    return (
        <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={{height:wp("100%") > 800 ? hp("30%") : (wp("80%")/16) * 9,
                                                                            width: wp("100%") < 800 ? wp("80%") : (hp("30%")/9) * 16,
                                                                            backgroundColor:"white",alignSelf:"center",alignContent:"center",alignItems:"center"}}>
            <Image source={item.image} style={{width:"100%",height:"100%",position:"absolute"}}/>
        </TouchableOpacity>
    )
}