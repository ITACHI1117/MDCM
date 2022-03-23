import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK11 = ({navigation}) => {
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
           BIBLE PASSAGE: Cor. 9 v 14 to 27 {"\n"}
           MEMORY VERSE: Cor. 4 v 21 {"\n"}</Text>
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
        THE FRUIT OF THE HOLY SPIRIT: MEEKNESS AND TEMPERANCE{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE{"\n"} {"\n"}</Text>
        (1)Meekness connotes a calm temper of mind, not easily provoked (James 3 v 13) the word meekness does not connotes weaknesses rather it involves humility and thankfulness towards God and polite restrained behavior towards others. The opposite of meekness are anger, a desire for revenge.{"\n"}{"\n"}
        (2) Meekness is restraining ones might and power, is a display of humility and grace. It is the acceptance of God's view on all matters including thought. (Isia 53 v 9){"\n"}{"\n"}
        (3) When you are meek you can do these,{"\n"}{"\n"}
        (i) Through meekness erring fellow can be corrected and restore.{"\n"}{"\n"}
        (ii) Forgiveness of others is easy. (Math. 18 v 23 to 25).{"\n"}{"\n"}
        (iii) Competition will disappear (Phil 1 v 5 to 8).{"\n"}{"\n"}
        (iv) Believers will complement one another in the ministry.{"\n"}{"\n"}
        (3) Temperance is the ability to exercise self-control. It is the demonstration of moderation and constraints against earthy and fleshly desire and lust. (Rev 7 v 21 to 25) it is perseverance (2 Peter 1 v 6){"\n"}{"\n"}
        (4) The benefits of temperance is that it frees believers from guilty conscience which springs sin or recklessness towards sin (2 Cor 4 v 2,Gal 5 v 13){"\n"}{"\n"}
        Holy Spirit helps the believer through the fruit of temperance to observe all the above mentioned.{"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
      (1) What is meekness?{"\n"}{"\n"}
      (2) What are the example of meekness in the bible?{"\n"}{"\n"}
      (3) What is temperance?{"\n"}{"\n"}
      (4) What are the benefits of temperance?{"\n"}{"\n"}
      (5) What does the Holy Spirit do with temperance to believers?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 10')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 12')} title='Next '></Button>
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
export default WEEK11