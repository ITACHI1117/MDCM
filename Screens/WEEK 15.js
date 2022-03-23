import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK15 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 15 {"\n"}
           BIBLE PASSAGE: Gen 37 v 3 to 4  {"\n"}
           MEMORY VERSE: Gen 37 v 14{"\n"}</Text>
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
        ENVY AND JEALOUSY {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1)Envy denotes a longing to possess something awarded to or achieved by another
(Gen 26 v 14, Gen 30 v 1).jealousy denotes a feeling or resentment that another has gain
something one may desire. (1 Sam 18 v 6 to 9).Envy and jealousy are works of the flesh
they are traits of the Christians formal way of life which need to be completely dealt
with (Titus 3 v 3){"\n"}{"\n"}
(2) Evil effect of envy and jealousy are: it could deny one from inheriting the kingdom
of God (Gal 5 v 19 to 21)It could lead to anger, self-destruction or divine wroth. (Gen
27 v 41, Num. 12 v 5 to 10, Prov 27 v 4)it could bring personal or weaken one's physical,
spiritual and emotional wellbeing. (Job 5 v 2, Prov 14 v 30) it could tear believers apart
(Gen 13 v 7 to 8,1 Cor. 3 v 3 to 5){"\n"}{"\n"}
(3) We can overcome envy and jealousy through the following:{"\n"}{"\n"}
(i) By being content with what we have (Prov. 15 v 16, 1 Tim 6 v 6){"\n"}{"\n"}
(ii) Deal with the thought of envy or jealousy and do not allow it to have foothold on
your mind (Rom 12 v 12){"\n"}{"\n"}
(iii) Let the faithful avoid the company of ungodly people (Ps 1 v 1, 2 Cor. 6 v 14 to
16){"\n"}{"\n"}
(iv) Allow the power of the Holy Spirit to overcome carnality by working in the spirit
(1 Cor. 3 v 3, Gal 5 v 16).{"\n"}{"\n"}
(v)Make the word of God your guide (Ps 119 v 11 and 105, Col 3 v 16){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  (1)What do you understand by envy and jealousy?{"\n"}{"\n"}
  (2)What do you think can cause envy and jealousy?{"\n"}{"\n"}
  (3)How can we overcome envy and jealousy even in the church?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 14')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 16')} title='Next '></Button>
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
export default WEEK15