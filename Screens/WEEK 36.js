import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK36 = ({navigation}) => {
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
           BIBLE PASSAGE: Heb 12:5-12{"\n"}
           MEMORY VERSE: Heb 12:7{"\n"}</Text>
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
        GOD’S CHASTENING{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: To chasten is to correct or discipline someone, often with the use of some pretty sharp
punishment for the purpose of moral improvement (Prov. 19:8, 23:13).We need to
consider God’s chastening and what he (God’s) as our father expect form us in response
to the chastisement we receive from him (eer 8:5) Note that chastisement is not meant
for destruction. A parent chastised the child he or she loves Prov. 3:12, 13:24.{"\n"}{"\n"}
   2: Purpose of Devine chastening{"\n"}{"\n"}
   - It is an expression of God’s love Heb. 12:6{"\n"}{"\n"}
   -It is check and balance instrument to keep us fit for him as vessel. 2 Tim 3:16-17{"\n"}{"\n"}
   -It is a corrective measure 2 Sam 7:14-15{"\n"}{"\n"}
   -It is a means of revealing the church and growth Heb. 12:10{"\n"}{"\n"}
   -it’s a profit that we are Gods own children Heb. 12:5{"\n"}{"\n"}
   3: Biblical example of those who enjoy chastisement of the lord{"\n"}{"\n"}
   -David 2 Sam 11:4-17, 12:9-10, 18-20{"\n"}{"\n"}
   -Jonah Jonah 1:1-4.{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What is physical and spiritual chastening?{"\n"}{"\n"}
  2: Mention some example of people who did not eer God’s warning or correction{"\n"}{"\n"}
  3: Why does God chastise?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 35')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 37')} title='Next '></Button>
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
export default WEEK36