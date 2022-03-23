import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK5 = ({navigation}) => {
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
           BIBLE PASSAGE: Act 1v 1 to 19{"\n"}
           MEMORY VERSE:  acts 1 v 3{"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME {"\n"}{"\n"}
        HOLY SPIRIT IN ACTION{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) Having studied the personality of the Holy Spirit and his attributes, we need look at the significance and the ministry of the Holy Spirit in order to see him in action.{"\n"}{"\n"}
        (2) The creative power of the holy spirit was first seen in action at the creation when the holy spirit began to move upon the face of the deep, (Gen 1 v 2)and when the mortal man was transformed through God's impartation of his spirit (Gen 2 v 7).{"\n"}{"\n"}
        (3) The Holy Spirit being the spirit of wisdom, knowledge and understanding spoke through David several years before the birth of Jesus on the manner through which Jesus would be betrayed and suffer from the hands of Judas, (acts 1 v 16 to 19) and what will become the reward of the betrayal. This indicates that the Holy Spirit is a speaking spirit and he works with David.{"\n"}{"\n"}
        (4) The holy spirit was with the lord Jesus and spoke to the apostles and commanded them to wait for the promises of the father (acts 10 v 38,acts 1 v 4 to 5)some power of the holy spirit are demonstrated to have{"\n"}{"\n"}
        (I) He is the commander of the church (acts 1 v 2 to 4){"\n"}{"\n"}
        (ii) He is the one who makes promises and never breaks it (acts 2 v 1 to 39){"\n"}{"\n"}
        (iii) He is the baptizer (acts 1 v 5) and the restorer of the Kingdom (acts 1 v 6 to 8){"\n"}{"\n"}
        (iv) Restoration of God's Kingdom to Israel will be practically impossible without the executive power of the trinity which is the Holy Spirit through the defeat of the accusers, the devil (Rev 12 v 10){"\n"}{"\n"}
        SOME SIGNIFICANT OF THE HOLY SPIRIT ARE{"\n"}{"\n"}
        (1)The Holy Spirit is the seed of God's power planted in a believer when such believer is baptized in the Holy Spirit. (Act's 1 v 8){"\n"}{"\n"}
        (2)The power of the Holy Spirit strengthens believers to witness for Christ.{"\n"}{"\n"}
        (3)It is the fire{"\n"}{"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION</Text> {"\n"}{"\n"}
(1) What differentiate through believers from false believers according to the teaching?{"\n"}{"\n"}
(2) What is the significant of the Holy Spirit?{"\n"}{"\n"}
(3) What are the powers of the Holy Spirit?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 4')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 6')} title='Next '></Button>
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
          export default WEEK5