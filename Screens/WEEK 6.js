import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK6 = ({navigation}) => {
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
           MEMORY VERSE:  acts 1 v 3{"\n"}WEEK 6{"\n"}
           BIBLE PASSAGE: Luke 11 v 9 to 13 {"\n"}
           MEMORY VERSE: 2 v 38 {"\n"}</Text>
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
        THE BAPTISM OF THE HOLY SPIRIT{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        How to receive the Baptism of the Holy Spirit the following steps will guide any sincere candidate for the baptism of the Holy Ghost{"\n"}{"\n"}
        (i) Be born again (john 3 v 3, acts 3 v 19){"\n"}{"\n"}
        (ii) Be desirous and thirsty for the baptism of the Holy Spirit (psalm 37 v 34, psalm 42 v 1, Isa 55 v 1){"\n"}{"\n"}
        (iii) Believe that the promise of the baptism of the holy ghost is for you and all believers (acts 2 v 33){"\n"}{"\n"}
        (iv) Identify the Lord Jesus Christ as the right source of baptism in the Holy Ghost. (Math 3 v 11){"\n"}{"\n"}
        (V) Have confidence also in his word which will never fall to the grown but it forever settled in heaven (john 7 v 37 to 39){"\n"}{"\n"}
        <Text style={{fontSize: 35,
        fontWeight: 'bold', justifyContent: 'center'}}>THE ACTUAL BAPTISM, THE BAPTISER AND THE EVIDENCE{"\n"}{"\n"}</Text>
        (1) The Lord Jesus Christ is the Baptizer (math 3 v 11){"\n"}{"\n"}
        (2) To be baptized you must come to his presence{"\n"}{"\n"}
        (3) You must worship God with praise, thanksgiving and right mind{"\n"}{"\n"}
        (4) You must focus on Jesus the author and the finisher of our faith (Heb. 12 v 1 to 2){"\n"}{"\n"}
        (5) You must ask God in prayer and in faith{"\n"}{"\n"}
        (6) The Holy Spirit baptism brings power to the believer (Luke 24 v 49){"\n"}{"\n"}
        (7) The Holy Spirit endures the believer with the divine ability to do exploit (john 4 v 1){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
      (1) Why some believer do not receive the Holy Ghost baptism{"\n"}{"\n"}
      (2) What are the benefits you stand to gain when you are baptized with the Holy Spirit{"\n"}{"\n"}
      (3) List the steps to baptism in the Holy Ghost.</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 5')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 7')} title='Next '></Button>
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
          export default WEEK6