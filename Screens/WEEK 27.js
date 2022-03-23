import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK27 = ({navigation}) => {
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
           BIBLE PASSAGE:  Luke 17: 11-19{"\n"}
           MEMORY VERSE: Luke 17:17 {"\n"}</Text>
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
        A HEART OF GRATITUDE{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: Thanksgiving is the act of giving thanks, or a form of showing gratitude and
appreciation for something done to you, why are people not showing appreciation to
God? Is it that God has not done anything? Jesus Christ appreciates thanksgiving. He
was surprised that only one of the ten lepers came back to express appreciation. All of
them were in need.{"\n"}{"\n"}
  2: People don’t see reasons to appreciate God a times because of the difficulties,
discouragement, and tribulations being encountered. Because of the lack of God’s word
(Col. 4:2){"\n"}{"\n"}
  3: Thanksgiving is a command (1 Thess. 5:20, Col 3:17). We are to come to his presence
with thanksgiving (psalm 100:4). It is showing appreciation for what he has done.
(Exodus 151-21 Luke 17: 11-9). It is a means of praying by faith. (John 11:41). Is a
weapon of warfare (2Chro. 20:20-27). It’s an evangelistic tool. (Psalm 57:4-11, 2
Samuel 22: 1-2) it put seal of perfection on our testimonies (Luke 17:15){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1: What is thanksgiving?{"\n"}{"\n"}
   2: What are the benefits of Thanksgiving, and dangers of not giving thanks?{"\n"}{"\n"}
   3: How should Christian behavior be different from those of unbelievers with respect to
thanksgiving?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 26')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 28')} title='Next '></Button>
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
export default WEEK27