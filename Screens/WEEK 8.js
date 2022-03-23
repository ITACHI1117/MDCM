import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native'
import { useTheme } from '@react-navigation/native';

const WEEK8 = ({navigation}) => {
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
           BIBLE PASSAGE: James 3 v 13 to 18. {"\n"}
           MEMORY VERSE: ROM 14 V 17. {"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME {"\n"}
        {"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1)Literally the fruit of the spirit is what happens when the Holy Spirit dwell in a believer. The fruit is the product the Holy Spirit’s cultivation of a character in a heart (Gal 5 v 22 to 23) describes what the spirit looks like.{"\n"}{"\n"}
        (2)The second and the third characteristics listed are joy and peace respectively. We are to submit our will to God's leading and our actions to God's words.{"\n"}{"\n"}
        (3)(James 3 v 13 to 18) identifies two categories of wisdom the earthy wisdom and the wisdom from above ie true wisdom has the following characteristics.{"\n"}{"\n"}
        (1) Produces good conversation (James 3 v 13 to 16){"\n"}{"\n"}
        (2) Meekness (James 3 v 17){"\n"}{"\n"}
        (3) Purity (James 3 v 17){"\n"}{"\n"}
        (4) Peaceable{"\n"}{"\n"}
        (5) Gentleness{"\n"}{"\n"}
        (6) Easy to be entreated{"\n"}{"\n"}
        (7) Full of mercy{"\n"}{"\n"}
        (8) Good fruit{"\n"}{"\n"}
        (9) Sincerity and justice{"\n"}{"\n"}
        (10) Truth{"\n"}{"\n"}
        The believer who allows the Holy Spirit to manifest the above stated fruit in their lives will experience various categories of peace and joy on every side.
         However the worldly wisdom carries the rest signal of:{"\n"}{"\n"}
        (i) Bitterness, envy and strife in the heart (James 3 v 14){"\n"}{"\n"}
        (ii) Shame and lies (James 3 v 14){"\n"}{"\n"}
        (iii) Sexual and devilish tendencies (James 3 v 15){"\n"}{"\n"}
        (iv) Confusion and evil works (James 3 v 16){"\n"}{"\n"}
        The carriers of the above listed cannot experience joy.{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
(1) How many wisdom did we discuss in the passage? Name them.{"\n"}{"\n"}
(2) What is the fruit of the spirit Manifest?{"\n"}{"\n"}
(3) What is worldly wisdom manifest?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 7')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 9')} title='Next '></Button>
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
          export default WEEK8