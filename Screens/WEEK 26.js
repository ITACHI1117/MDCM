import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';


const WEEK26 = ({navigation}) => {
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
           BIBLE PASSAGE:  John 4:19-25{"\n"}
           MEMORY VERSE: John 4:24{"\n"}</Text>
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
        ACCEPTABLE CHRISTIAN WORSHIP{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: Worship is an act of paying homage, which involves deep respect, reverence,
adoration and showing sincere love to a supreme being. The almighty God who created
us must be worshiped for whom he is and not because he needs anything from us (Act
17; 23-25) we are created to show the splendor of God by glorifying him (psalm 29:2){"\n"}{"\n"}
   (2) to worship God in an acceptable manner, you must put your heart in order i.e. avoid
hindrances, distraction, purge your heart of anger, hatred and bitterness forgive those
who offend you restrain your tongue from lies, filthy communication etc. ( Col 3:8-9
Math 5:23-24 Act 24:16 Eer. 19:18){"\n"}{"\n"}
  (3): For your worship to be acceptable you must worship in spirit and in truth. (John 4:20-24),
 worship from pure heart and clean hand (Act. 24:16), worship in faith (John 9:36-38)  {"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What do you understand by worship?{"\n"}{"\n"}
  2: What is acceptable and inacceptable worship?{"\n"}{"\n"}
  3: what are the things a believer must observe before worship?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 25')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 27')} title='Next '></Button>
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
export default WEEK26