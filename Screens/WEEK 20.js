import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK20 = ({navigation}) => {
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
           BIBLE PASSAGE: 1 SAMUEL 3: 1 to 10 {"\n"}
           MEMORY VERSE: SAMUEL 3:10{"\n"}</Text>
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
        HEARING FROM GOD{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        (1)You cannot hear if there is no call from somewhere or someone. Also, you only
answer to a call that you hear. A call can come from any quarters, however, being able
to recognize the voice of the one calling is very crucial for every child of God. May
God give us hearing ears, seeing eyes and listening hearts in Jesus' name ( Prov. 20 v
12 , Math 11 v 15){"\n"}{"\n"}
  2. For God to call you, you should be a child of his. ( 1 Samuel 3 v 19). .Believe God
will call you, you must prepare your ear to hear. (1 Samuel 3 to 49, Isaiah 50 v 4 to 5).
Every child knows the voice of his/her parents. If you are a child of God you should
recognize the voice of your father.{"\n"}{"\n"}
  3. How does God speak?
He speaks through a loud voice( Exo. 3 v 4 ), inner witness (Math 6 v 17 , Acts 27 v 9
to 11), small/still voice (1 kings 19 v 12 , job 4 v 16) dream and vision (1 kings 3 v 5 ,
Matthew 1 v 20) and through his words ,( 2 timothy 3 v 16 , Hebrew 10 v 17).{"\n"}{"\n"}
  4. Some attributes to God's speaking are:
  a. obedience : whenever God speaks his children must obey ( 1 Samuel 3 v 10 ,1 Samuel
15 v 22) .{"\n"}{"\n"}
  b. confirmation from the scripture :it must have a basis in the bible . (Acts 17 v 11) .
The one who heard the word must be able to discern between God’s speaking, the devil
or flesh. (1 Corinthians 2 v 11, john 4 v 1).{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1. What do you understand by hearing from God?{"\n"}{"\n"}
   2. Who can or cannot hear from God?{"\n"}{"\n"}
   3. How does God speak?{"\n"}{"\n"}
   4. What are the attributes or linkage to God's speaking?{"\n"}{"\n"}
   5. What are the benefits of hearing from God?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 19')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 21')} title='Next '></Button>
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
export default WEEK20