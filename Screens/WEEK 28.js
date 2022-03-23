import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK28 = ({navigation}) => {
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
           BIBLE PASSAGE:  Isaiah 43:10-25{"\n"}
           MEMORY VERSE: Psalm 86:10{"\n"}</Text>
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
        ONLY ONE GOD{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: The name “God”, the derivation of which is uncertain, we give to the eternal, infinite
, perfect and incomprehensible being, the creator of all things, who preserves and
governs all by his almighty power and wisdom, and is the only proper object of worship.
The proper Hebrew name for God is JEHOVAH which means “he is”, Hence there is
no one else besides our God.{"\n"}{"\n"}
  2: He described himself with some phrases like I am the lord thy God (Isaiah 43:10-11,
12, 15, and 25). I will be with you (Isaiah 4:2) i will say to the north verse 6, I will work,
verse 13, I will do new things verse 19, I will bring them seed verse 5{"\n"}{"\n"}
  3: Worship of idol is terrible and dangerous, idolatry is sinful and forbidden by God.
Also is dangerous to worship idol (exodus 20:4 Leviticus 26: 1, Deuteronomy 11:16,
Isaiah 42:8 1 John 5:21) how did the following passage describe idol? (Deuteronomy
4:28, Jeremiah10:5, Act 17:29, Romans 1: 22-23){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: How great is Almighty God?{"\n"}{"\n"}
  2: What is idolatry?{"\n"}{"\n"}
  3: Mention one idol in your village/town and tell us why you should not worship it{"\n"}{"\n"}
  4: What are the dangers of worshiping idols?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 27')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 29')} title='Next '></Button>
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
export default WEEK28