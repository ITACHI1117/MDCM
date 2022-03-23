import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK22 = ({navigation}) => {
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
          fontWeight: 'bold',}}>  
           BIBLE PASSAGE:  JOHN 15 v 5 to 19{"\n"}
           MEMORY VERSE: JOHN 14 v 6{"\n"}</Text>
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
        LIFE{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1. From time immemorial, people have been asking ' why was i born? , why did God
make me? Why am i here? , what is the purpose of life? What is the meaning of life? ,
what is life itself? Various people give various answers. Some say, life is the union of
soul and body. This may be true for humans but not plants. Some say it is the period
between birth and death. This is not true for life exists before birth and death. Only
Jesus has the answer. (John 11 v 25, John 14 v 16). The bible speaks of three kinds of
life:{"\n"}{"\n"}
  a. physical life given to man at the time of creation.{"\n"}{"\n"}
  b. spiritual life{"\n"}{"\n"}
  c. new life that God gives to the believer in Jesus Christ ( Eph. 2 v 1 ). Eternal life which
is the nature of the lord God himself.{"\n"}{"\n"}
  2. The origin of life can be described as: All lives come from God. (Gen 2 v 7). Jesus is
life. (John 14 v 16, John 11 v 25). Jesus gives life. (1 John 5 v 12 to 20) .our parents are
vessels through which we came to this world.{"\n"}{"\n"}
  3. The purpose of life: To accomplish our God- given assignment or destinies.
To prepare for eternity with the lord Jesus. To choose final resting place for our soul.  {"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1. What do you understand by Life?{"\n"}{"\n"}
  2. Discuss three kinds of life{"\n"}{"\n"}
  3. What is the origin of life?{"\n"}{"\n"}
  4. What is the purpose of life?{"\n"}{"\n"}
v5. What did you gain from the teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 21')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 23')} title='Next '></Button>
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
export default WEEK22