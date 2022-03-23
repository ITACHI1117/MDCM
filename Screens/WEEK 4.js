import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native'
import { useTheme } from '@react-navigation/native';

const WEEK4 = ({navigation}) => {
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
           BIBLE PASSAGE: John 16 v 1 to 11{"\n"}
           MEMORY VERSE: John 14 v 28 {"\n"}</Text>
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
         THE HOLY SPIRIT PERSONALLY AND ATTRIBUTES{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        The Holy Spirit would do these things among others according to (John 16 v 8 to 11){"\n"}{"\n"}
        (1) He would reprove the world of sin (John 16 v 8){"\n"}{"\n"}
        (2) The assignment of the holy spirit has to do with righteousness (John 16 v 8 to 10) he would expose Christ, as the one who was the father from the beginning and that he is the righteousness of God which came from above and through his righteousness believes has been made the righteousness of God (2 Peter 1 v 1){"\n"}{"\n"}
        (3) The third duty of the Holy Spirit, according to our bible passage, has to do with the judgment. (John 16 v 8 to 11).This imply that the Holy Spirit would expose the truth to the believers that the devil the prince of this world, and his demons has been judged by the Lord himself {"\n"}{"\n"}
        <Text style={{fontSize: 35,fontWeight: 'bold', justifyContent: 'center'}}>WHO IS THE HOLY SPIRIT</Text> {"\n"}{"\n"}
        (1) He is a person, the third person of the trinity, the comforter. (John 16 v 5 to 7)he is not an emotion, falling, wailing or feeling.{"\n"}{"\n"}
        (2) He is the one that will make life comfortable and profitable for believers to engage in the work which the Lord has Commissioned them (John 14 v 12){"\n"}{"\n"}
        (3) He is the chief executor of God's program on earth (John 15 v 26, John 16 v 7 to 14){"\n"}{"\n"}
        (4) He is the revealer of of God's plan and hidden treasures of the Kingdom of God (John 14 v 25 to 26){"\n"}{"\n"}
        (5)He is the power behind any breakthrough in life (acts 1 v 8, acts 19 v 11 to 12){"\n"}{"\n"}
        (6)He is the revealer of the sons of God (Rom. 8 v 16). {"\n"}{"\n"}
        <Text style={{fontSize: 35,fontWeight: 'bold', justifyContent: 'center'}}>WHAT ARE HIS ATTRIBUTES {"\n"} </Text>
        (1) He is the omnipresent (psalm 139 v 7, Eph. 2 v 17){"\n"}{"\n"}
        (2) He is the omniscience (1 cor. 2 v 10 to 11){"\n"}{"\n"}
        (3) He is omnipotent (Luke 1 v 35, rom 8 v 11){"\n"}{"\n"}
        (4) He is eternal (rev 1 v 8){"\n"}{"\n"}
        (5) He is the comforter, teacher and guidance (John 14 v 26,John 15 v 26,John 16 v 13).{"\n"}{"\n"}
        (6) He reproves, helps, glorifies and intercedes. (Rom 8 v 26, John 16 v 7 to 13){"\n"}
        <Text style={{fontSize: 25,fontWeight: 'bold', justifyContent: 'center'}}> {"\n"}QUESTION FOR DISCUSSION</Text> {"\n"}
        (1) What is the assignment of the Holy Spirit? {"\n"} {"\n"} 
        (2) Who is the Holy Spirit? {"\n"} {"\n"}
        (3) What are the attributes or work of the Holy Spirit?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 3')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 5')} title='Next '></Button>
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
              fontSize: 30,
              justifyContent: 'center'
            },
            bottomCenter: {
                flex: 1,
                justifyContent: 'flex-end'
          
            }
          }); 
          export default WEEK4