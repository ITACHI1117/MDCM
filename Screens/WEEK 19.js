import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK19 = ({navigation}) => {
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
           BIBLE PASSAGE: MARK 10:13-16 {"\n"}
           MEMORY VERSE: MATTHEW 18:6{"\n"}</Text>
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
        CHILD ABUSE{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1. According to the Merriam Webster’s dictionary, a child is a young person especially
between infancy and youth. Child abuse is any maltreatment of a child which causes
him/her harm. Such action can also take the form of child neglect and failure to protect
a child from danger especially by a parent or other care giver. The bible does not use
the word abuse but tells us that whosoever harms a child is asking for God's anger (Mark
9 v 42).{"\n"}{"\n"}
  2. God places high premium on children (Math 10 v 13 to 14). He assures them of his
kingdom (Math 10 v 14 to 16). He compares children as the arrows in the hand of the
might (Psalm 127 v 4){"\n"}{"\n"}
  3. Child abuse can be in form of physical abuse, sexual abuse and emotional/
psychological abuse (1 kings 3 v 19, 1kings 3 v 25 to 26, Mark 9 v 42, 2 Samuel 13 v
10 to 15, 1samuel 17 v 26 to 28){"\n"}  {"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1. What is child abuse?{"\n"}{"\n"}
   2. How did God describe children to him?{"\n"}{"\n"}
   3. What are the results of child abuse?{"\n"}{"\n"}
   4. How can we control child abuse?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 18')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 20')} title='Next '></Button>
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
export default WEEK19