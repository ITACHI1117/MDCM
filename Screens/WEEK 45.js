import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK45 = ({navigation}) => {
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
           BIBLE PASSAGE: Luke 12:13-21{"\n"}
           MEMORY VERSE: Cor 5:15{"\n"}</Text>
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
        THE PURPOSE FOR LIVING{"\n"} {"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"} {"\n"}</Text>
        1: We see from the scriptures that our God is a God of purpose (Eph 1:11). He has a purpose for your life right from when you were conceived in your mother’s womb. (Jeremiah 1:4-5). However, since the fall of Adam, survival and preservation became the strongest instinct of the natural man. At the same time, the natural man waits to make a name for him (Gen 11:4). These tendencies manifest in the desire to possess it shows that the natural man is living for himself however; there is the need for us to discover the purpose of living now that Christ has come {"\n"} {"\n"}
          2: The lord Jesus cautioned his children “Take heed of covetousness’ Luke 12:15 {"\n"} {"\n"}
  3: The believer purpose of living in Christ should be: {"\n"} {"\n"}
  -A life that is control by Jesus and Holy spirit John 8:42 {"\n"} {"\n"}
  -A life that wants all soul saved John 3:16 {"\n"} {"\n"}
  -A life that seek first the kingdom of God and his righteousness Matt 6:33 {"\n"} {"\n"}
  -A life that will not live for self but Christ {"\n"} {"\n"}
  4: When a person is regenerated his purpose of living is changed completely to living for Christ. To live for Christ the ambition of the natural man must die Galt 2:20{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION {"\n"}{"\n"}</Text>
  1: Discuss the solution to erase some material possession in our society? {"\n"} {"\n"}
  2: What purpose does the regenerated and the un-regenerated souls fulfill? </Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 44')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 46')} title='Next '></Button>
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
export default WEEK45