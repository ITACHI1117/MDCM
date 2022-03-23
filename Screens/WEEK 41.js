import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK41 = ({navigation}) => {
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
           BIBLE PASSAGE: Exo. 13:1, 12-15 {"\n"}
           MEMORY VERSE: Prov. 3:9{"\n"}</Text>
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
        FIRST FRUITS{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1. First fruits are in various types. Our God ask us to give him all and all we have to do is to submit. In his lesson we want to eer what first fruit are, how to give it and benefit of giving first fruit{"\n"}{"\n"}
          2. Three categories of first fruits{"\n"}{"\n"}
          i. The first fruit of increase (Gen 22) For example, increase in salary ( a cliff between the old and new salary.{"\n"}{"\n"}
            ii. The first fruit sacrifice (Gen22) God told Abraham to sacrifice Isaac, his only son. This could mean the entire January salary, for instance the difference between the first fruit of increase and the first fruit of sacrifice is in divine response. In the first fruit increase, God promised that your barn will burst in the first fruit sacrifice, your blessing will become global (Gen 22: 25-18){"\n"}{"\n"}
            iii. Redemption of the just male child (Exo. 13:13, 34:20) (number 18:15-19) the first child belongs to God you can redeem him with a price which belong to the chief priest. Dedicating first fruit to the God is a way of thinking him for providing them.{"\n"}{"\n"}
            3. Benefit of giving the first fruit are:{"\n"}{"\n"}
  a. Abraham was blessed genesis 22:15-18, genesis 24:35-36{"\n"}{"\n"}
  b. Hannah was blessed too 1 psalm 2:21{"\n"}{"\n"}
  c. Solomon was eeer 1 king 3:3-14.{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1. Mention blessings of giving first fruit?{"\n"}{"\n"}
  2. Identify dangers of refusal to give the first fruit to God?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 40')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 42')} title='Next '></Button>
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
export default WEEK41