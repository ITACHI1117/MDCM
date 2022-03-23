import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK49 = ({navigation}) => {
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
           BIBLE PASSAGE: Act 2:44-47{"\n"}
           MEMORY VERSE: Act 2:46 {"\n"}</Text>
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
        MEANING OF CHRISTIAN FELLOWSHIP{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: A tree cannot make a forest neither can a solider make up an army. There has always been a crucial need for relational interaction among Christians alike for fellowship to be meaning full and beneficial it must go beyond the realms of preaching, teaching, fasting, studying, praise/worship and often spiritual activities it must be full of deep felt concern and care for one another in the household of God. Effective fellowship is putting oneself in the shoes of others to fell what they are passing through (Rom 12:15).{"\n"}{"\n"}
          2: Christian fellowship means spending time together sharing personal experience and learning together. Christian fellowship meets the need of man Act 2:42-46. It create avenue to rejoice with those who are rejoicing Prov. 27:17.{"\n"}{"\n"}
          3: Benefit of Christian Fellowship:{"\n"}{"\n"}
          -It gives room to share things together Prov. 27:17{"\n"}{"\n"}
          - Personal growth and accountability Eph. 4:15{"\n"}{"\n"}
          - To support each other Gal 6:10{"\n"}{"\n"}
          - It creates opportunity for joy and unity. 2 Cor. 13:11.{"\n"}{"\n"}
          -It brings about answers to ones prayer and other prayers{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What do you understand by Christian Fellowship?{"\n"}{"\n"}
  2: What are the dangers of fellowshipping together as Christians?{"\n"}{"\n"}
  3: What are the benefits of Christian fellowship?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 48')} title='Back'></Button>
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
export default WEEK49