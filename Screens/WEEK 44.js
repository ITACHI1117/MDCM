import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK44 = ({navigation}) => {
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
           BIBLE PASSAGE: 2 Peter 1:2-7{"\n"}
           MEMORY VERSE: Peter 3:18{"\n"}</Text>
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
        MANAGING GRACE{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: The gift of God is available to everyone (Eph. 4:7) Grace is not just available for salvation (Titus 2:11) but also for the total wellbeing of those who receive it (2 Cor. 9:18) However, what you do with the grace of God is available to you which determine who and what you become in life (1 Cor. 15:10). It is important for every believer to embrace the grace of God and run with it (Eph. 3:8) we shall therefore be considering what Grace can do in the life of the recipient as well as what the recipient can do with or against grace {"\n"} {"\n"}
       2: What can grace do?
  -Among others, Grace can make one God’s elect Rom 11:5-6 {"\n"} {"\n"}
  - Grace gives boldness Rom 15:15 {"\n"} {"\n"}
  - Grace gives endurance 2 Cor. 12:9 {"\n"} {"\n"}
  - Grace impact riches Eph. 2:7 {"\n"} {"\n"}
  - Grace brings hope 2 Thess. 2:16 {"\n"} {"\n"}
  - Grace changes lives 1 Cor. 15:9-10 {"\n"} {"\n"}
  ¬3: Grace can multiply in believer 2 Peter 1:2. The more knowledge of Christ you have the more the grace 2 Peter 1:2  {"\n"} {"\n"} 
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION {"\n"} {"\n"}</Text>
  1: What can eer the grace of God in believers? {"\n"} {"\n"}
  2: How can we grow in grace? {"\n"} {"\n"}
  3: what can grace offer? </Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 43')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 45')} title='Next '></Button>
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
export default WEEK44