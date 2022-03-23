import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK39 = ({navigation}) => {
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
           BIBLE PASSAGE: Heb. 11:17-25 {"\n"}
           MEMORY VERSE: Heb 11:6{"\n"}</Text>
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
        THE EXPLOITS OF FAITH{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: Our lord Jesus specifically provided that miracles are bread for the chicken of the kingdom (Matt 15:26) this implies that every child of God should experience miracle daily. The miraculous power of God must be demonstrated in us daily. This cannot be except through faith Heb. 1:6{"\n"}{"\n"}
          2: Believers are living below the God best for them. Let’s discuss the questions below{"\n"}{"\n"}
          -What is the expectation of god for his children?{"\n"}{"\n"}
          - Are Christians living up to God’s expectation in term of faith? If no! Why do we find ourselves in this situation?{"\n"}{"\n"}
          -What are the way out? How can we do exploit for God? The following scriptures to solve the above question Hosea 4:6, Jer. 29:11, James 1:68 Heb. 11:6 Num. 13:31-33{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: How does God respond when he sees faith in action?{"\n"}{"\n"}
  2: Why some believers living below Gods best for them?{"\n"}{"\n"}
  3: What is the role of prayer in exploit of Faith?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 38')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 40')} title='Next '></Button>
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
export default WEEK39