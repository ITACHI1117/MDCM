import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK30 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 30{"\n"}
           BIBLE PASSAGE:  2 Chronicle 15:2-4{"\n"}
           MEMORY VERSE: Isaiah 55:6{"\n"}</Text>
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
        THE PURSIUT OF GOD{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: To “seek” means to look for, search for, inquire about, investigate, pursue and strive
after (Matthew 13: 44-46) the bible records that men began to seek God{"\n"}{"\n"}
  2: Why must believers seek God with all their heart God is nearer to those who seek
him (Isaiah 50:2, Isaiah 55:6, Isaiah 59:1){"\n"}{"\n"}
-It is a Devine commandment which must obey (1 Chro. 14:14){"\n"}{"\n"}
-Those who seek God will find him (Jeremiah 29: 11-14, 1 chronicle 28:29){"\n"}{"\n"}
-He will give us rest ( 2 chronicle 14:7){"\n"}{"\n"}
  3: How then should we seek him?
-We seek him with all our hearts- (Due 4:29 Jeremiah 29:13) continually (Psalm 105:4,{"\n"}{"\n"}
1 Chron. 16:11). Daily (Matt 58:2). Diligently ( Heb. 11:6 )with humility (2 Chron.
7:14), with our lives (Amos 5:4){"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1: Why do people often become tired of seeking after the lord?{"\n"}{"\n"}
   2: Why do some people not seek God at all?{"\n"}{"\n"}
   3: How should believers pursue God and why?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 29')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 31')} title='Next '></Button>
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
export default WEEK30