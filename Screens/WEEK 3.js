import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK3 = ({navigation}) => {
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
           BIBLE PASSAGE: MATH 1 VS 18 TO 25{"\n"}
           MEMORY VERSE: 1 cor. 3 v 11 {"\n"}</Text>
           </View>
           
         <View style={{
    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 40,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME {"\n"}{"\n"}
        WHO IS THIS JESUS{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) The name Jesus is the Greek form of the Hebrew word JEHOSUAH. its signifies savior or Jehovah saves.no one have ever bore this name with so much justice, nor so perfectly fulfilled the signification of it ,as Jesus Christ. Who saves from sin and hell and has merited heaven for us by the price he paid with his blood {"\n"}{"\n"}
        (2) It was given to him by divine appointment (math 1 v 21) as the proper name for the savior so long desire. The name Christ meaning the 'anointed one 'the Messiah' was his official name. Every Christian must know some functional truth about Jesus and the honor attached to his name. {"\n"}{"\n"}
        (3) The mother was a Virginia. (Math 1 v 23) prophet Isaiah declare the prophecy of his birth in (Isaiah 7 v 14) {"\n"}{"\n"}
        (4) The conception was of the Holy Spirit math 1 v 18. {"\n"}
        (5) To remove doubt or fear the angel of the Lord came to give the confirmatory approval of the origin of the conception (Math 1 v 20) {"\n"}{"\n"}
        (6) The angel of the lord announced the name of the child as Jesus which was an uncommon name and gave the meaning as the savior from sin (math 1 v 21){"\n"}{"\n"}
        (7) The prophetic declaration of the name of the lord Jesus as Emmanuel in( Isaiah 7 v 14 and math 1 v 23)which means God with us complement the angelic announcement of the name Jesus which means savior (1 Timor 3 v 16 and Luke 1 v 47)note Jesus is God revealed in the flesh (John 1 v 14 and John 14 v 9)all things where created through Jesus (Hebrew 1 v 2 and col 1 v 16 to 18,John 1 v 3)Jesus earthy ministry was placed with miracles signs and wonders (act's 10 v 38 ) {"\n"}{"\n"}
        (8) The life style of Jesus was characterized by holiness, integrity and power of the Holy Spirit (mark 1v 32 to 34, John 14 v 30) {"\n"}{"\n"}
        (9) Jesus was loaded with life and demonstrated divine wisdom, knowledge and understanding (1 cor. 1 v 24) {"\n"}{"\n"}
        (10) Jesus was our substitution for sin. He died our death (Ezekiel 18 v 14,I john 1 v 9,math 1 v 18 to 21,isaiah 53 v 4 to 10, 1 Peter 2 v 24 and gal 3 v 13) {"\n"}{"\n"}
        (11) Jesus rules over all things (Hebrew 1 v 3, Math 28 v 18) {"\n"}{"\n"}
        (12) The only name given to men to be saved (acts 4 v 12){"\n"}{"\n"} 
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION</Text> {"\n"}{"\n"}
         (1) Who is the Lord Jesus Christ?{"\n"}{"\n"}
         (2) Mention the characteristics of Jesus.{"\n"}{"\n"}
         (3) What makes the birth of Jesus different from other birth?{"\n"}{"\n"}
         (4) How powerful is the name of Jesus.</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 2')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 4')} title='Next '></Button>
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
          export default WEEK3