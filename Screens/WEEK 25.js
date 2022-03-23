import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK25 = ({navigation}) => {
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
           BIBLE PASSAGE: acts 16:1-5  {"\n"}
           MEMORY VERSE: John 15:16{"\n"}</Text>
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
        BREAKING FRUITS THAT WILL ABIDE{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1. There is need for an extra spiritual effort on the soul saved to get them established,
localized in a church fellowship and mobilized until they too become soul winners.
Luke 15:14-7{"\n"}{"\n"}
  2. Fruit bearing for the believer is a must because God elected and saved us primarily
to bear fruit for him. John 15:16 Romans 7:4.
Failure to bear fruit for Christ will lead to eternal loss of fellowship with Christ John
5:1-2. Matthew 3:10.{"\n"}{"\n"}
  3. The devil uses his wilder and devices such as persecution, tribulation and worldliness
to prevent believers from bearing fruits Matthew 13:9.{"\n"}{"\n"}
  4. Christ ordained believers to bear abiding fruits 1john 5:16. Believers must
concentrate efforts towards conceiving, maturing and multiplying of the fruits col.1:28.{"\n"}{"\n"}
  5. There should be follow up of soul. Acts 2:41-47, 16:5{"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1. What do you understand by bearing abiding fruits for the kingdom of God?{"\n"}{"\n"}
   2. Why is that fruit bearing is a must for believers.{"\n"}{"\n"}
   3. What do you think can make your fruit's abide?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 24')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 26')} title='Next '></Button>
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
export default WEEK25