import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK14 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 14{"\n"}
           BIBLE PASSAGE: Gen 39 v 1 to 13  {"\n"}
           MEMORY VERSE: Job 1 v 8{"\n"}</Text>
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
        INTEGRITY PART TWO {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1)Men and women of integrity are very few, even among children of God .are you a
man or woman of integrity? Can God vouch for you as he did for job (Job 2 v 3) king
David in (Psalm 25 v 21) affirmed by saying let integrity and uprightness preserve me,
for i wait on thee.{"\n"}{"\n"}
 (2) Let us choose Joseph as an example of a man of integrity, with the following proof.{"\n"}{"\n"}
 (i) His boss new he was a Godly man (Gen 39 v 3{"\n"}{"\n"}
   (ii) He serves his master with the diligent of overseer or supervisor (Gen 39 v 4){"\n"}{"\n"}
   (iii) Through him blessing was attracted to his boss enterprises (Gen 39 v 5){"\n"}{"\n"}
   (iv) He knew how to flee from danger zone of sin and he fled (Gen 39 v 2 and 13){"\n"}{"\n"}
   (v) He knew where to accept or reject gift (Gen 39 v 4, 5 and 13) Joseph was integrity
at work.{"\n"}{"\n"}
   (3) The scope of integrity can be as follows:{"\n"}{"\n"}
   (i) Integrity in speech (James 1 v 19, Prov. 8 v 7 to 8).{"\n"}{"\n"}
   (ii) Integrity in time management (Eph. 5 v 15 to 17, John 9 v 4){"\n"}{"\n"}
   (iii) Integrity in finance (1Cor 4 v 2, Gen. 47 v 14){"\n"}{"\n"}
   (iv) Integrity in relationship with the opposite sex. (1cor 5 v 1,1 Sam 2 v 12){"\n"}{"\n"}
   (v) Integrity in keeping promise and paying vow (Ecc. 5 v 4 to 5){"\n"}{"\n"}
   (4) God rewards believers with integrity with:{"\n"}{"\n"}
   (i) God will vouch for you (Job 2 v 3){"\n"}{"\n"}
   (ii) God will keep you from falling (Gen 39 v 9){"\n"}{"\n"}
   (iii) God will give you peace (Psalm 37 v 37){"\n"}{"\n"}
   (v) He will guide your steps (Prov. 11 v 3){"\n"}{"\n"}
   (vi) He will preserve you (Psalm 25 v 21 to 22){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   (1)Mention some heroes of integrity in the bible and the benefits they received.{"\n"}{"\n"}
   (2)Discuss some scope of integrity{"\n"}{"\n"}
   (3)What do you understand in the teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 13')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 15')} title='Next '></Button>
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
export default WEEK14