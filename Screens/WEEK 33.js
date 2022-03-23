import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK33 = ({navigation}) => {
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
          fontWeight: 'bold',}}>3{"\n"}
           BIBLE PASSAGE: Rom 6:8-14 {"\n"}
           MEMORY VERSE: m 6:13{"\n"}</Text>
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
        VICTORY OVER SIN{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: After salvation, the deep cry at every heart should be at holiness, to be like Christ, to
overcome sin, to live a blameless and holy life. Some Christians try to be holy and at
times they do not succeed so they become discouraged, they become fearful of
preaching holiness lest they be seen as preaching something they cannot practice. Some
Christians have never even heard of the victorious life of holiness so they can keep
sitting and confessing from day to day (1 John 5:4) John was not speaking about victory
in heaven but of victory on earth: daily victory over the world and the lust thereof.{"\n"}{"\n"}
  2: How can believers obtain and retain victory over sin?{"\n"}{"\n"}
  -Identify that we can do all things by Christ Jesus (Phil 4:13 Rom 8:38){"\n"}{"\n"}
  -You have been commanded to be holy (peter 15-16){"\n"}{"\n"}
  -Understanding that you’re dead with Christ (Gal 2:20) the old man in you has been
buried also.{"\n"}{"\n"}
{"\n"}-Believe that you now have victory and dominion over sin (Rom. 6:8){"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: How can a believer overcome sin?{"\n"}{"\n"}
  2: Differentiate between sin and culture{"\n"}{"\n"}
  3: Identify ways which Satan attract people to sin</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 32')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 34')} title='Next '></Button>
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
export default WEEK33