import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK47 = ({navigation}) => {
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
           BIBLE PASSAGE: LUK 13:6-9{"\n"}
           MEMORY VERSE: Job 14:17{"\n"}</Text>
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
        LESSON FTROM THE STUMP{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: A stump is the base of a tree left in the ground when other parts are gone. It is similar to the eer of something cut, broken or eer down. Just like a tree certain factors can turn a man into a “stump”. There is virtually nothing good about the stump. Aside from the fact that its just occupying the ground. Any one that has become like a stump will just be existing on earth without making meaningful impact. It is dangerous to be like a stump, the mercy of God can revive a stump.{"\n"}{"\n"}
          2: Danger of becoming a stump:{"\n"}{"\n"}
          -A stump is fruitless, barren and un-purposeful Luke 13:6 Job 15:16 lack of faith may attribute to reason why people are like stump Heb. 4:2{"\n"}{"\n"}
          - A stump is dishonored 2 Tim 2:20-21{"\n"}{"\n"}
          - A stump receives nourishment for nothing Luke 13:6-7 Heb. 5:12{"\n"}{"\n"}
          3: There is hope for stump:{"\n"}{"\n"}
          -A stump can sprout again with tender branch through the scent of water Job 14:7-9{"\n"}{"\n"}
          - A man who is due for God judgment, if he repent he can obtain mercy from the lord, because God is abundant in mercy Haba. 3:2 2 Peter 3:9{"\n"}{"\n"}
          -God patiently gives opportunity to make amends Luke 13:7-9 Ezek. 33:11{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What is a stump?{"\n"}{"\n"}
  2: How can a stump revive?{"\n"}{"\n"}
  3: What role do the word and the spirit of God play in restoring a back slider to God’s</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 46')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 48')} title='Next '></Button>
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
export default WEEK47