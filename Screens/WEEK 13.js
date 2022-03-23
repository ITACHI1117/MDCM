import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK13 = ({navigation}) => {
  const { colors } = useTheme();
        return ( 
              <ScrollView>
        <View style={{

    
          
    
          
        }}><Text 
           
           
        style={{color: colors.text,
          fontSize: 40,
          flex: 0.6,
          justifyContent: 'center',
          marginTop: "0%",
          marginLeft: '5%',
          marginRight: '5%',
          fontWeight: 'bold',}}>WEEK 13{"\n"}
           BIBLE PASSAGE: Prov. 11 v 1 to 9 {"\n"}
           MEMORY VERSE: Prov. 11 v 3{"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME{"\n"}{"\n"}
        INTEGRITY PART 1{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) Integrity means the state of being honest, just, upright or pure. Its covers the whole moral character. It is one of the needs of the church and the society today.{"\n"}{"\n"}
       (2) A man whose integrity comes from his knowledge of the word of God will be associated with the following,{"\n"}{"\n"}
       (ii) He or she would be guided properly before taking any action (Prov.11 v 3).{"\n"}{"\n"}
       (iii) His or her way shall be directed and shall not fall (Prov. 11 v 5){"\n"}{"\n"}
       (iv) He or she would not seek for profit that will kill him or her eventually (Prov. 11 v 4){"\n"}{"\n"}
       (v) Their hope shall not perish (Prov. 11 v 7){"\n"}{"\n"}
       (vi) They will not run into trouble (Prov. 11 v 8){"\n"}{"\n"}
       (3) Integrity is fundamentally a proof of ones believe in the gospel of our Lord Jesus Christ (2 cor. 5 v 17)it makes it reliable (1 Sam 12 v 3 to 4)man of integrity honors his words, promises and his commitment to responsibilities (Josh 2 v 12 to 14,Josh 6 v 22 to 23) it makes us truthful and consistent (Luke 16 v 10){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
     (1) What is integrity?{"\n"}{"\n"}
     (2) What are the factors that militate against integrity?{"\n"}{"\n"}
     (3) Why do we need integrity?{"\n"}</Text>    
        </View>
        <View
        style={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
        marginTop: '2%',
            }}>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 12')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 14')} title='Next '></Button>
             </View>
        </ScrollView>
          );
        }
        const styles = StyleSheet.create({
            title: {
              fontSize: 40,
              fontWeight: 'bold',
          
            },
            titles: {
              fontSize: 35,
              justifyContent: 'center'
            },
            bottomCenter: {
                flex: 1,
                justifyContent: 'flex-end'
          
            }
          }); 
export default WEEK13