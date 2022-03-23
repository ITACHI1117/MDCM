import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK21 = ({navigation}) => {
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
           BIBLE PASSAGE: Colossians 4:7-8  {"\n"}
           MEMORY VERSE: 2 timothy 2:22 {"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME{"\n"}
        ESSENTIALS OF FOLLOW UP{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1. It is an established fact that fruit bearing is a must for believers and that abiding fruits
is God’s command. We must therefore, proceed to discover some methods pf follow up
in order to have fruits that will abide in the kingdom forever.{"\n"}{"\n"}
    2. These methods of follow up can be discussed:{"\n"}{"\n"}
    a. Baptismal class. (Math 28 v 20){"\n"}{"\n"}
    b. Organizing gender specific instructions or special teaching or training sessions. (1
timothy 5 v 1 to 20){"\n"}{"\n"}
    c. Homes/cell bible study or house fellowship centers. (Acts 2 v 46, Acts 16 v 40 and
Rom 16 v 3 to 5){"\n"}{"\n"}
    d. Presentation of literature on specific subjects as gifts to the new covenant.{"\n"}{"\n"}
    e. Presentation of the holy bible to the converts{"\n"}{"\n"}
    f. Sending text messages to the converts.{"\n"}{"\n"}
    g. Making calls through various social media{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}</Text>
  1. What do you understand by following up of converts or first timers.{"\n"}{"\n"}
  2. What are the methods of following up of souls available to believers?{"\n"}{"\n"}
  3. Mention 5 dangers of young souls neglect.</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 20')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 22')} title='Next '></Button>
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
export default WEEK21