import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK46 = ({navigation}) => {
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
           BIBLE PASSAGE: Philip 3:12-14{"\n"}
           MEMORY VERSE: John 18:37{"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME{"\n"} {"\n"}
        FUFILING PURPOSE{"\n"} {"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"} {"\n"}</Text>
        1: Discover your purpose in life. God determines the believer’s purpose before they are born eer 1:5, Believers must understand the purpose for which they were created Philip 3:12. You can discover your purpose by paying attention to: {"\n"} {"\n"}
          -What are your in built abilities, talents, gift? Eph. 4:7, Act 7:22. What do you have passion for? I.e. things you have eer or experience joy over? Psalm 6:9. Your pursuit are often in your potential and passion therefore identify them {"\n"} {"\n"}
          2: The believer should live to fulfill the purpose of living: {"\n"} {"\n"}
          -Ask God to reveal to you his plan for your life Jer. 1:4-5, The eer a vision and mission statement Prov 29:18 Heb. 2:2 set achievable goals and pursue them Act 20:24. Take one step at a time and be not a mediocre. Identify and relate with people with the same passion. Learn from their mistakes and build from their success {"\n"} {"\n"}
          -Submit yourself form mentoring and counseling: do not claim to know all Act 18:24-26. Focus your attention on God always return all the glory to God. Do not ascribe anything to yourself Mark 2:2 Dance 4:30-34{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION {"\n"} {"\n"}</Text>
  1: How can you discover and fulfill your purpose on earth? {"\n"} {"\n"}
  2: What are the enemies of vision? {"\n"}{"\n"}
  3: How do you understand the teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 45')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 47')} title='Next '></Button>
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
export default WEEK46