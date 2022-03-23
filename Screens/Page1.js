
import React from "react";
import {View, Button,Text,StyleSheet, ScrollView, MyTheme, Settings } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';









import WEEK2 from './WEEK 2';
import WEEK3 from './WEEK 3';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from "react-native-reanimated";
import WEEK1 from "./WEEK 1";






const Page1 = ({navigation}) => {
  const { colors } = useTheme();

  const Tab = createBottomTabNavigator();




    return ( 
     
          <ScrollView style={{flex: 1
          }} > 
            
    <View  style={{flex: 1

      

      

      
    }}>

      <Text 
       
      
       style={{ color: colors.text,
       fontSize: 40,
       flex: 0.6,
       justifyContent: 'center',
       marginTop: "5%",
       marginLeft: '5%',
       marginRight: '5%',
       fontWeight: 'bold',}}>
         {"\n"}GUIDELINES FOR LEADERS {"\n"}OF SUNDAY SCHOOL CLASS{"\n"}</Text>
       </View>
       
     <View style={{


    }}><Text style={{color: colors.text,
      fontSize: 30,
      flex: 0.4,
          alignItems: 'center',
          marginLeft: '5%',
          marginRight: '5%',
      justifyContent: 'center'}}>1.Read the passage assigned for each week very carefully and prayerfully.{"\n"}{"\n"}
    2. Try as much as possible to read other Bible reference for each week.{"\n"}{"\n"}
    3. Start each session with worship and praise followed by prayer. {"\n"}{"\n"}
    4. Make the session as lively as you can, especially when you come to discussion period.{"\n"}{"\n"}
    5. There is no Mr. Know All’, therefore if a question is put to you and you do not have a ready answer,{"\n"}{"\n"}
    have the courage and humility to say ‘I will check that up, and possibly give you an answer by next week’{"\n"}{"\n"}
    6. As a leader, always see that you are in control. If any member is getting off the track, try to  him or her back to the point without any embarrassment or a show down.{"\n"}{"\n"}
    7. The points mentioned in the scheme are only meant as a guide. The question are by no means exhaustive. They are meant to evoke discussion and lead to a better understanding of the passage.{"\n"}{"\n"}
    8. We feel that one hour duration should be adequate for each session, and the one hour period could be utilized ad follows{"\n"}{"\n"}
    a) Opening devotion  - 5 minutes{"\n"}{"\n"}b) Reading of the passage   - 5 ”{"\n"}{"\n"}
    c) Explanation of the passage -15 ” {"\n"}{"\n"} d) Discussion period   - 30 ”{"\n"}{"\n"}
    e) Closing devotion  - 5 ”{"\n"}</Text>    

    </View>
    </ScrollView>
   
    
    

    

  );
}
const styles = StyleSheet.create({
  title: {

    fontSize: 40,
    flex: 0.6,
    justifyContent: 'center',
    marginTop: "10%",
    marginLeft: '5%',
    marginRight: '5%',
    fontWeight: 'bold',

  },
  titles: {

    fontSize: 30,
    flex: 0.4,
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    justifyContent: 'center'
  },
  bottomCenter: {
      flex: 1,
      justifyContent: 'flex-end'

  },
  button:{
    bottom: 0,
    marginTop: "50%",
    justifyContent: 'flex-end'
  },
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
}); 


export default Page1
