import { Image, View, Text } from "react-native";
import { HorizonalBar } from "./horizonalBar";

export function TitleBar(props){
    const {title, icon, rightContent} = props;
    return(
        <View style={{width:"100%"}}>
            <View style={{flexDirection:"row",flex:1,alignContent:"center",padding:10}}>
                <Image style={{width:"2rem",height:"2rem"}} />
                <Text style={{color:"white", fontSize:"2rem"}}>{title}</Text>
                <View style={{flex:1}} />
                {rightContent}
            </View>

          <HorizonalBar height={3} />
        </View>
    )
}