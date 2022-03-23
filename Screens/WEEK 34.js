import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK34 = ({navigation}) => {
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
           BIBLE PASSAGE:  Phil 4:8-9{"\n"}
           MEMORY VERSE: Gen 17:1{"\n"}</Text>
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
        LIVING RIGHT{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: Solomon, to whom God gave wisdom, said righteousness exalt a nation, but sin is a
reproach to the nation (Pro 14:34). Solomon came to recognize that only in God can
man find real significance and lasting satisfaction (Eccl 12:13 Psalm 103:5) examples
of righteous men in the bible are Noah (Gen 6:8-9), Abraham (Jam 2:21-23) and (Job
1:1-8){"\n"}{"\n"}
  2: To live a righteous life means.{"\n"}{"\n"}
  -Being right or just before man and God (Act 10:35){"\n"}{"\n"}
  -Being holy and upright according to Christ standard (Phil 3:9){"\n"}{"\n"}
  -Be like God in character and attitude (Jer. 9:24){"\n"}{"\n"}
  - Voluntary and deliberate action to fight (psalm 119:10-11){"\n"}{"\n"}
  -Disciplined life style centered on Christ (Heb. 12:11){"\n"}{"\n"}
  -Combination of salvation, satisfaction, dedication etc.){"\n"}{"\n"}
  -Genuine love for God and man kind (John 3:10){"\n"}{"\n"}
  -Christ like characters (Matt7:16 Phil 2:5, 4:8){"\n"}{"\n"}
  3: Believers can benefit from living right through eer the good of the land ( Isa 1:18-
19), Overflowing blessings (Due 28:1-2), victory without a fight (Due 28:7 )continuous
success psalm 1:3 Answer to prayer 1 Peter3:12 eradication of poverty (Due 30:9
unspeakable joy and peace Rom 14:14{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
 1: What makes it possible for a believer to live right?{"\n"}{"\n"}
 2: What are the attribute to live right?{"\n"}{"\n"}
 3: What do you understand in this teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 33')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 35')} title='Next '></Button>
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
export default WEEK34