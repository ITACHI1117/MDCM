import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK38 = ({navigation}) => {
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
          fontWeight: 'bold',}}>{"\n"}
           BIBLE PASSAGE: John 2:1-5 {"\n"}
           MEMORY VERSE: Heb 4:12{"\n"}</Text>
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
        THE EFFECACY OF THE WORD{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: God leads his children in definite ways. He loves to speak plainly with his own but when he speaks in code using signs and symbols, It is important that the recipient of such message return to ask for the meaning or else the purpose of the communication is defeated (John 10:3). How do you hear from God plainly? May he speak clearly to you from now on in Jesus name?{"\n"}{"\n"}
         2: The word God sends is for a purpose, it is to meet needs. He sends his word:{"\n"}{"\n"}
         -To heal physically, spiritually and all round Psalm 107:20{"\n"}{"\n"}
         -To deliver from trouble, dangers and deaths etc. Psalm 107:20{"\n"}{"\n"}
         -To set us free from satanic bondages, and self-indulgence John 8:30, 36.{"\n"}{"\n"}
         -To bless and deal with frustration, Failures etc. Luk5:4{"\n"}{"\n"}
         -To save from sin and it consequences Psalm 119:9{"\n"}{"\n"}
         -To direct and show the way- Psalm 119:105{"\n"}{"\n"}
         -To comfort and encourage us John 1:3, 5-6{"\n"}{"\n"}
         -To protect- Psalm 91:11-12 –To instruct us Joshua 1:8, Prov. 1:10{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: Have you ever used the word of God in any situation and did it work for you?{"\n"}{"\n"}
  2: Mention any purpose of the word of God?{"\n"}{"\n"}
  3: What makes the word works?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 37')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 39')} title='Next '></Button>
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
export default WEEK38