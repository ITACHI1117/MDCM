import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK17 = ({navigation}) => {
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
          fontWeight: 'bold',}}> {"\n"}
           BIBLE PASSAGE: 1 cor.7; 1_15 {"\n"}
           MEMORY VERSE: Prov. 18:22 {"\n"}</Text>
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
        A HAPPY MARRIAGE {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1. There is a season and time for everything and every purpose in life (Ecc 3 v1) , In
every facet of human endeavor, doing the right thing at the right time in marital issues
is crucial to success. Many people have entered the institution of marriage at the wrong
time and for the wrong reason.{"\n"}{"\n"}
 2. Apostle Paul, through the leading of the Holy Spirit gave some guidelines to man and
wife regarding marriage.{"\n"}{"\n"}
 TO MAN: Go and marry rather than commit fornication (1 Cor,7 v 2) .Man should give
conjugal right to his wife( 1 Cor 7 v 3).{"\n"}{"\n"}
TO WOMAN: woman should marry and conjugal right to your husband. Wife should
not divorce the husband ( 1 Cor. 7 v 10 to 13){"\n"}{"\n"}
 3. When should a man or Christian marry? It should be determined by his maturity.
Wait until you are old enough to marry. it is for adults and not for children (Heb 5 v 14
and 1 Cor. 7 v 36).{"\n"}{"\n"}
 Pray and let God guide you. (Rom 12 v 2, Phil 2 v 13). Don't rush into it even when you
do know who to marry. Wait to know little or what he/she dislikes.( Isa 28 v 16). Never
marry a man or a woman with a hope of annoying him/her later (1Cor. 10 v 12).Wait
for the approval of the girl's parents, this is very important. (Isa 28 v 16, Col 3 v 20 ){"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1. When should a Christian marry?{"\n"}{"\n"}
   2. What makes a happy marriage?{"\n"}{"\n"}
   3. Is it necessary for parents to approve a marriage before proceeding?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 16')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 18')} title='Next '></Button>
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
export default WEEK17