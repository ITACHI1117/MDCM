import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView, MyTheme, Settings } from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK7 = ({navigation}) => {
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
          fontWeight: 'bold',}}></Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME {"\n"}{"\n"}
       THE FRUIT OF THE SPIRIT: LOVE AS A COMPONENT{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"} </Text>
           (1) The fruit of the Holy Spirit is the result of the Holy Ghost spirit presence and operation in the life of a Christian. Fruit is the natural result of growth{"\n"} {"\n"} 
          (2) The Bible makes it clear that everyone receive the holy spirit the moment he or she believes in Jesus Christ (Rom 8 v 9, 1 cor. 12 v 13,Eph. 1 v 13 to 14){"\n"} {"\n"} 
          (3) One of the primary purpose of the Holy Spirit coming into a Christian’s life is to change that life. (Gal 5 v 16) cautions believer as follow, walk in the spirit and not fulfil the works of the flesh why? Verse 17 explains that the flesh (human nature without God) is continually antagonistic and in constant conflict with the Holy Spirit{"\n"} {"\n"} 
          (4) Love is the embodiment of practical kindness, humility, truth, holiness and faith (1 cor. 13 v4 to 7)in the other hand hatred in the family is pride, rudeness, selfishness, unbeliever, hopelessness and failure (1 cor. 13 v 4 to 8)love is virtue, hate is vice they are none complementary (Gal 5 v 16)  {"\n"} {"\n"} 
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>QUESTION FOR DISCUSSION{"\n"} {"\n"} </Text> 
  (1) How can somebody work in love?{"\n"} {"\n"} 
  (2) How does the Holy Spirit helps believer?{"\n"} {"\n"} 
  (3) What did you gain from the teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 6')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 8')} title='Next '></Button>
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
          export default WEEK7