import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK9 = ({navigation}) => {
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
           BIBLE PASSAGE: 2 cor. 6 v 3 to 7 {"\n"}
           MEMORY VERSE: col 8 v 12 {"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME: 
        {"\n"}{"\n"}THE FRUIT OF THE SPIRIT, LONG SUFFERING AND GENTLENESS {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) Another set of characteristics of the fruit of the holy spirit are long suffering and gentleness as listed in (Gal 5 v 22 to 23)lung suffering is also translated as patience while gentleness is also called kindness. As the Holy Spirit works in our lives, our character changes. Where we had harbored selfishness, cruelty, rebellion and spite, we now possess love, joy, peace, kindness, goodness etc. These fruit reflect the character of God{"\n"}{"\n"}
       (2)LONG SUFFERING{"\n"}{"\n"}
       (i) Long suffering means the ability to endure much pain without recourse violence.{"\n"}{"\n"}
       (ii) Long temper means lung suffering according to King James Version translation (2 cor. 6 v 6){"\n"}{"\n"}
       (iii) Long temper is the ability to hold one temper for a long time despite the odds.{"\n"}{"\n"}
       (iv) It is the ability to wait for God to provide comfort and punish wrong doing despite the opportunity to retaliate.{"\n"}{"\n"}
       (v) It is the ability to restrain yourself and think carefully when one is passing through pain.{"\n"}{"\n"}
       (vi)A person who is not patient will be agitated, revengeful and prone to discouragement (John 14 v 27){"\n"}{"\n"}
       (vii)God is love and wants his children to show (Rom 12 v 19,lev 19 v 18){"\n"}{"\n"}
       GENTLENESS (Kindness){"\n"}{"\n"}
       (i) Kindness means compassion, tender concern and uprightness.{"\n"}{"\n"}
       (ii) God's kindness produces salvation for mankind (Titus 3 v 4 to 5,rom 2 v 4 and rom 11 v 22){"\n"}{"\n"}
       (iii) God's kindness gives security and safety for his children (psalm 17 v 8, math 23 v 37){"\n"}{"\n"}
       (iv) God demonstrated kindness to Elijah by providing food for him in time of famine through the widow and later raised the widow’s son from death. (1 king 8 v 24){"\n"}{"\n"}
       (vi) Jesus show kindness (Mark 6 v 34, mark 7 v 29, mark 10 v 46 to 52){"\n"}{"\n"}
       (iv) the holy spirit can help believer to be gentle In this violent world (2 cor 6 v 4 to 6){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}</Text>
(1) What does long suffering mean to you?{"\n"}{"\n"}
(2) What does it mean to be gentle?{"\n"}{"\n"}
(3) Give example of gentleness or kindness in the bible related to this teaching.{"\n"}{"\n"}
(4) What gives believers power to endure pain for Christ?{"\n"}{"\n"}
(5) What do you gain from the teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 8')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 10')} title='Next '></Button>
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
          export default WEEK9