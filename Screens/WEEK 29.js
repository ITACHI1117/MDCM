import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK29 = ({navigation}) => {
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
           BIBLE PASSAGE: Judges 13:3-7 {"\n"}
           MEMORY VERSE: Exodus 32:29 {"\n"}</Text>
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
        CONSECRATION{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: Consecration is a process or practice of making something or someone sacred,
dedicated and set apart for the lord. It also means the devoting or setting apart for
anything or anyone to the worship service of God (Exodus 28:4)
  2: There are benefits of concentration which include: overflowing blessings (Exo. 1:9,
Exo. 10:38, Act 5:12). You will become a chosen vessel of God (2 Timothy 2:21) you
will experience ever abiding God’s presence (psalm 91:1 Matthew 28: 19-20){"\n"}{"\n"}
  3: You can break your concentration when you are contaminated by food, drink and sin.
Example of people who broke their concentration are Samson (Judges 14:13, Judges8:9)
Gideon- by pride (Judges 7:20-22) Moses-by anger- (Exodus 14:21-28 Numbers 20: 7-
12).  {"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: Define concentration and broken concentration{"\n"}{"\n"}
  2: What are the dangers of breaking concentration?{"\n"}{"\n"}
  3: What are the benefits of concentration?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 28')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 30')} title='Next '></Button>
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
export default WEEK29