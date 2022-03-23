import React from 'react';
import { Stylesheet, Text, View, Image, Dimension, Dimensions} from 'react-native';

const MiniCard = ()=>{
    return(
        
        <View style={{flexDirection: 'column',
        marginTop: '5%',
        alignItems: 'center',
        borderBottomColor: 'gray',}}>
            <Text style={{fontSize:15,
        }}
            ellipsizeMode="tail"
            numberOfLines={3}>WEEK1</Text>
            <Text style={{fontSize:12,}}>Dedication</Text>
        </View>
        
        
    )
}
export default MiniCard
