
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
export function HorizonalBar(props){
    const {height = 1, padding = 0} = props;
    return(
        <View style={{width:"100%",padding:padding}} >
            <View style={{width:"100%",height:height,backgroundColor:"#0681A6"}} />
        </View>
        
    )
}