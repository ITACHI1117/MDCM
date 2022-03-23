import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK32 = ({navigation}) => {
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
           BIBLE PASSAGE:  Heb. 4:14-16{"\n"}
           MEMORY VERSE: Heb. 2:18{"\n"}</Text>
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
        OVERCOMING TEMPTATION{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: Just as we cannot stop birds from flying over our heads but we can stop them from
resting in our head, so also can we not stop evil thought from passing through our minds.
However we need not accept them or allow them to take a straight hold. The
consequences of yielding to temptation can be disastrous whereas resisting it births
victory.{"\n"}{"\n"}
  2: The possible outcome of temptation is that we can fall into it. We can overcome it.
  The consequence of falling in temptation;{"\n"}{"\n"}
  -The testimony of such Christian is damaged{"\n"}{"\n"}
  -Such fellow becomes weak spiritually (matt 26:41){"\n"}{"\n"}
  -Such fellow has committed sin by the act (1 Tim 6:9){"\n"}{"\n"}
  3: We can overcome temptation for instance trusting God- (Cor 1:9, )By memorizing
the word of God, by constant prayer and carefulness (matt 26:41 )By feeing (2 Tim
2:22), by resisting the devil ( James 4:7). We can do all things through Christ including
resisting the devil{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What are the two outcome of temptation?{"\n"}{"\n"}
  2: What are the results of falling into temptation?{"\n"}{"\n"}
  3: What are the benefits of overcoming temptations?{"\n"}{"\n"}
  4: How can we overcome temptation as a believer?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 31')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 33')} title='Next '></Button>
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
export default WEEK32