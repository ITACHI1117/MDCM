import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK48 = ({navigation}) => {
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
           BIBLE PASSAGE:  \Mark 16:17{"\n"}
           MEMORY VERSE: Act 5:12{"\n"}</Text>
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
        KEYS TO SIGN AND WONDERS{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: Every door has a key that unlocks it. So also signs and wonders have keys that open them (Isaiah 22:22). Whatever God does is for a purpose and there is also time for signs and wonders (eer 3:1). This is the essence of today’s lesson. May signs and wonder be our experience even as we learn at the name of Jesus Christ.{"\n"}{"\n"}
        2: What is signs and wonder? Signs are a token, eer or eer of remarkable event/supranational intervention. Exo. 3:12, Isa 7:4. Wonder is a product of miracle which causes grate astonishment Mark 2:10-12, Act 3:6-10.{"\n"}{"\n"}
        3: Why do we need signs and wonders? Devil and demons have wreaked great torment, abnormal behavior and captivity upon man. Mark 5:25. Signs and wonders propel people to believe the gospel. God confirms the calling of his ministers through signs and wonder Psalm 104:4 Mark 6:17-18{"\n"}{"\n"}
        4: Keys to signs and wonders{"\n"}{"\n"}
        -Come to Jesus with expectation to receive Matt 9:20-22. Total obedience to his words John 2:5 Lifestyle of praise and worship prayer of faith Ham 5:14-15 eer in faith and prayer Matt 15:22-28{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What must we do to experience signs and wonder?{"\n"}{"\n"}
  2: Why do we need signs and wonders?{"\n"}{"\n"}
  3: Is Jesus involved in signs and wonder if yes, explain?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 47')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 49')} title='Next '></Button>
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
export default WEEK48