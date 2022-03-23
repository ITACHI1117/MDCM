import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK10 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 10{"\n"}
           BIBLE PASSAGE: Rom 15 v 13 to 14 {"\n"}
           MEMORY VERSE: Eph. 5 v 9 {"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME 
        {"\n"}{"\n"}THE FRUIT OF THE HOLY SPIRIT: GOODNESS AND FAITH {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) Goodness and faith are part of the vital characteristics of the fruit of the holy spirit .Goodness in man is not a mere passive quality, but the deliberate patience of right to wrong., the firm and persistence resistance of all moral evil, choosing and following all moral good faith in general is the persuasion of the mind that a certain statement is true. (Phil 1 v 27,2 this. 2 v 13)it primary idea is trust. These are the resulting character of someone who is allowing the Holy Spirit to develop his or her life.{"\n"}{"\n"}
        (2)The bible passage for today points out the believers are full of goodness through the power of the Holy Spirit (Rom 15 v 13){"\n"}{"\n"}
        GOODNESS{"\n"}{"\n"}
        (i) Goodness is a virtue and holiness in action{"\n"}{"\n"}
        (ii) It is a desire to be a blessing to others{"\n"}{"\n"}
        (iii) It is a moral characteristics of a spirit filled person{"\n"}{"\n"}
        (iv) Giving to the poor (James 1 v 27){"\n"}{"\n"}
        (v) Approaching a sinner in love with the aim of restoring him or her.{"\n"}{"\n"}
        (vi) Providing for one’s family wife, children and relatives{"\n"}{"\n"}
        (vii) Visiting the sick{"\n"}{"\n"}
        (viii) Goodness may not be in-born, it is the gift of the holy spirit (James 1 v 17, Math. 5 v 18){"\n"}{"\n"}
        FAITH (FAITHFULNESS){"\n"}{"\n"}
        (i) Faith is believing without seeing (Heb. 1 v 11){"\n"}{"\n"}
        (ii) Faith as the fruit of the spirit is Interpreted as faith fullness (Gal 5 v 22){"\n"}{"\n"}
        (iii) Faithfulness is absolutely loyalty to God and his words.{"\n"}{"\n"}
        (iv) Believers must be faithful to trust God even when circumstances does not encourage such act (2 cor. 5 v 7){"\n"}{"\n"}
        (v) Believers much be faithful to God in service at all time (Rev 2 v 13){"\n"}{"\n"}
        (vi) Believers must be faithful in their service to humanity always (1 peter 5 v 12){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
     (1)What is goodness?{"\n"}{"\n"}
     (2)State the characteristics of goodness{"\n"}{"\n"}
     (3)Explain what you understand by to be faithful in service.{"\n"}{"\n"}
     (4)What are the characteristics of faithfulness?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 9')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 11')} title='Next '></Button>
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
          export default WEEK10