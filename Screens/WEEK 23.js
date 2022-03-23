import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK23 = ({navigation}) => {
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
           BIBLE PASSAGE: JOHN 5 v 17 to 27{"\n"}
           MEMORY VERSE: OHN 5 v 24{"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME{"\n"}
        DEATH{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1. What is death?. Death is the opposite of life, the departure of life and the cessation
of life. To humans, death is the separation of body, soul and spirit. The body goes to the
grave and disintegrates while the soul goes back to God. (Ecc 12 v 7). And the soul goes
to one of the two places: the soul of the wicked to hell
(Luke 16 v 23) and the soul of the righteous to paradise (Abraham's bosom) (Luke 16 v
22).{"\n"}{"\n"}
  2. The origin of death can be described:{"\n"}{"\n"}
  a. There are two types death and both came from the garden of Eden.{"\n"}{"\n"}
  b. Spiritual death -separation from God. ( Gen. 2 v 17). It came from eating the
forbidden fruit.{"\n"}{"\n"}
  c. Physical death-cessation of life, (Gen 3 v 19). While the first example of spiritual
death is Adam and Eve, (Gen 3 v 24).While the first example of first physical death was
Abel son of Adam. (Gen 4 v 8){"\n"}{"\n"}
  3. Causes of spiritual and physical death can be as a result of: disobedience to God.
(James 1 v 15), sin (Eze. 18 v 4).Diseases, calamities have their root in sin.{"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1. What is death?{"\n"}{"\n"}
   2. Discuss kinds of death ?{"\n"}{"\n"}
   3. What are the causes of spiritual death?{"\n"}{"\n"}
   4. Differentiate between spiritual and physical death?{"\n"}{"\n"}
   5. What is your understanding of this teaching?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 22')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 24')} title='Next '></Button>
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
export default WEEK23