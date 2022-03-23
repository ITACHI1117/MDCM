import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK12 = ({navigation}) => {
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
           BIBLE PASSAGE: 1 TIMOTHY 6 v 6 to 12 {"\n"}
           MEMORY VERSE: Heb. 13 v 5. {"\n"}</Text>
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
        GAMBLING{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) The word gamble means to risk something of value on an outcome that depends on chance. Other related activities to gambling are betting, lotto/lottery, gaming, casinos, and money doubling and get rich quick programs among others.{"\n"}{"\n"}
       (2) Because the outcome of these activities depends on chance and doing them involves risk, then by definition they are all gambling.{"\n"}{"\n"}
       (3) Although the bible does not significantly condemn gambling, betting or lottery it does warn us however to stay away from the attempt to get rich quick (prov. 23 v 5, Ecc 5 v 10){"\n"}{"\n"}
       (4) Gambling most definitely is focus on the love of money and undeniably tempt people with the promise of quick and easy riches Jesus warns us against letting riches get into the way of our spiritual benefits (mark 4 v 19, mark 10 v 25)and that we cannot serve both God and money. (Luke 16 v 13){"\n"}{"\n"}
       (5) Lack of contentment or satisfaction will lead to danger. It leads to temptation and snare (1 Tim 6 v 9)people gamble because of love of money (Ecc. 5 v 10 to 15,) Coveciousness (Exo. 20 v 17,Tim 6 v 10)get rich quick (Pro 3 v 5)they believe they will always win (1Tim 6 v 9,Prov 1 v 32).{"\n"}{"\n"}
       (6) God wants his people to prosper (psalm 35 v 27) and to earn their money honestly. (2 Thes. 3 v 10) you can't serve two masters (luck 16 v 13) do not join the multitude to do evil (Exo. 23 v 2){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
      (1) What is gambling?{"\n"}{"\n"}
      (2) Why do people gamble?{"\n"}{"\n"}
      (3) What are the biblical counsel for believers?{"\n"}{"\n"}
      (4) What do you gain from this teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 11')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 13')} title='Next '></Button>
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
export default WEEK12