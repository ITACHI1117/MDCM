import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK42 = ({navigation}) => {
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
           BIBLE PASSAGE: Malachi 3:6-12 {"\n"}
           MEMORY VERSE: Malachi 3:10{"\n"}</Text>
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
        TITHING{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1. Related offenses to these two offenses were the offenses of stubbornness and being argumentative.{"\n"}{"\n"}
          a. God called them to return but instead of heeding they were asking God why? Where in shall we return? Malachi 3:7.{"\n"}{"\n"}
          b. God told them that they had robbed him but instead of repenting they asked God how? When have we robbed you?{"\n"}{"\n"}
to those who will obey to give tithe, the following will happen:{"\n"}{"\n"}
  -God will return to them will complement malachite 3:7{"\n"}{"\n"}
  -God will open the window of heaven Malachi 3:10{"\n"}{"\n"}
  -God will pour more blessings abundantly 3:10{"\n"}{"\n"}
  -God will rebuke the devourer Malachi 3:11{"\n"}{"\n"}
  -God will increase the fruit of the ground Malachi 3:11{"\n"}{"\n"}
  -God will abolish waste Malachi 3:11{"\n"}{"\n"}
  2. Examples of tithers are Abraham, Jacob Genesis 14:18-20, Israelites Leviticus 27:3-33
  The purpose of tithes is to fill the "storehouse’, to support God's work and ministers of the gospel.{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1. Identify blessings of paying tithe ?{"\n"}{"\n"}
  2. What are the dangers of not paying tithe?{"\n"}{"\n"}
  3. Why are we paying tithe?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 41')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 43')} title='Next '></Button>
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
export default WEEK42