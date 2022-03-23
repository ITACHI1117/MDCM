import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native'
import { useTheme } from '@react-navigation/native';

const WEEK1 = ({navigation}) => {
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
           BIBLE PASSAGE: 2 Corinthians 11 v 22- 31
           MEMORY VERSE: John 4 v 34
           </Text>
           </View>
           
         <View style={{
            
    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME:{"\n"}{"\n"}
        DEDICATION{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE{"\n"}{"\n"}</Text>
        (1.) Dedication is an act of setting apart or consecration of a thing or a being to a deity.{"\n"}{"\n"}
        (2) Christian are expected to be devoted wholly and earnestly to God which is the purpose he has called them.{"\n"}{"\n"}
        (3) Our Lord Jesus Christ was dedicated to this course for living, so also were the prophets and the apostles of old (John 4 v 34).you too must prove to God that you are dedicated to him.{"\n"}{"\n"}
        (4) The passage above shows practical example of the cost of dedication. Apostle Paul presented his unbeatable credentials in verse 22 to 23 as a Hebrew and an Israelite and a seed of Abraham and minister of Christ.{"\n"}{"\n"}
        (5) Those who carried these kind of credentials humanly speaking were exclusively respected in their society they have access to the high priest and the authority. ( Act 9 v 1 -2), To the kings and governors.{"\n"}{"\n"}
        (6) Apostle Paul submitted himself to these hardships for Christ sake and did not accused God for his travail, rather he blessed the Lord "father of our Lord Jesus Christ which is blessed forever more" 2 cor. 11 v 31
        Therefore self-discipline play a major rule in a successful Christian life. Christ require from every believer commitment to the race, such commitment has a huge cost which is attached and can only be paid through self-discipline.{"\n"}{"\n"}
        {"\n"}{"\n"}<Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>QUESTION FOR DISCUSSION{"\n"}</Text>
        (1) What is dedication?{"\n"}{"\n"}
        (2) What role does self-discipline play in dedication?{"\n"}{"\n"}
        (3) identify those activities you can observe in the church to show whether people are committed to Christ or not.{"\n"}{"\n"}
        (4) What are the benefits of dedication?</Text>    
        </View>
        <View>
             <Button onPress ={() => navigation.navigate('WEEK 2')} title='Next Page'></Button>
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
export default WEEK1