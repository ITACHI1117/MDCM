import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK24 = ({navigation}) => {
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
          fontWeight: 'bold',}}> {"\n"}
           BIBLE PASSAGE: Gen 2 v 15 to 25. {"\n"}
           MEMORY VERSE: Heb. 13 v 4.{"\n"}</Text>
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
        ESSENCE OF MARRIAGE{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        (1)Marriage is the oldest human institution. It is older than the church, human
government. Marriage has been ordained of the Lord for companionship and
procreation of the race. marriage leads to establishment of homes for children where
happiness and joy can reign (Prov. 18 v 22)although we lives in the days of low morals
standard, God's law and standard does not change.{"\n"}{"\n"}
   (2)The Lord made a woman and brought her to the man (Gen 2 v 22) and they were
both naked, the man and his wife and were not ashamed. (Gen 2 v 25) some deduction
can be made from the above biblical references.{"\n"}{"\n"}
   (i) God created man and woman (Gen 2 v 7){"\n"}{"\n"}
   (ii) God created woman for man{"\n"}{"\n"}
   (iii) God hates isolation or loneliness.{"\n"}{"\n"}
   (iv) He knows the perfect help mate for every man.{"\n"}{"\n"}
   (v) God ordained them to live together.{"\n"}{"\n"}
   (3) We marry to obey the command of God(Gen 1 v 28,Gen 2 v 24)also for fellowship
(Gen 2 v 18 )for partnership (Ecc. 4 v 9)to satisfy the sexual and emotional desires that
are good, holy and legitimate but can only be satisfied in marriage. (1Cor 7 v 2 and 9){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  (1)Who should a Christian marry? (For tea teachers 2 Cor. 6 v 14 to 17){"\n"}{"\n"}
  (2) Why should the answer for number one stand (for teachers 2 Cor. 6 v 14, 2 Cor. 6 v
15, 2 Cor. 6 v 16){"\n"}{"\n"}
  (3)Mention reasons why light and darkness should not stay together.</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 23')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 25')} title='Next '></Button>
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
export default WEEK24