import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK40 = ({navigation}) => {
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
           BIBLE PASSAGE: Matt. 6:9-13{"\n"}
           MEMORY VERSE: Eph. 6:18{"\n"}</Text>
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
        ALL PRAYERS {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: Prayer is simply defined as communicating with God. In the garden of Eden, God and man talked (Gen 3:8-13) in Gen 4:26, calling the name of God was just mention in prayer, prayer is the master key to lock and unlock any door in the sprit realm. However, any prayer offered not in the form of dialogue with God is not regarded as true prayer{"\n"}{"\n"}
          2: Believer should not use vain repetition when praying matt 6:7 also not to be like heathen who use much speaking matt 6:7 prayer to your heavenly father Matt 6:8-9{"\n"}{"\n"}
          -Request for the kingdom to come matt 6:10{"\n"}{"\n"}
          -Pray to do his will when you live matt 6:10 ask god for clarity provision forgiving your offender{"\n"}{"\n"}
          -Pray not enter temptation and deliver you from evil matt 6:11-14 also give you glory for his power and kingdom{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What do you understand by vain repetition?{"\n"}{"\n"}
  2: What do you understand by Gods will in prayer?{"\n"}{"\n"}
  3: What do you understand by praying in sprit?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 39')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 41')} title='Next '></Button>
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
export default WEEK40