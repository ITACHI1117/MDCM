import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK16 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 16{"\n"}
           BIBLE PASSAGE: 1 Cor. 6 v 12 to 13. {"\n"}
           MEMORY VERSE: Phil 4 v 5.{"\n"}</Text>
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
        CHRISTIANITY AND SOCIALISATION {"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) To socialize simply means "to talk and do things together with other people in a
friendly way "one can get involve or socialize himself or herself in the immediate
environment, governance, cultural activities and political issues.{"\n"}{"\n"}
  (2) The facts that something is facially good or morally acceptable or legally approved
does not mean that a Christian should swallow them hook line and sinkers, through
believers are spiritual judges and not condemned in any accusation by any man(1 Cor
2 v 15){"\n"}{"\n"}
  The reason for these are:{"\n"}{"\n"}
  (i) Believers have the mind of Christ. (1 Cor. 2 v 15){"\n"}{"\n"}
  (ii) Believers have the Holy Spirit which can guide them (2 Cor 2 v 13 to 14){"\n"}{"\n"}
  (iii) Believers has the word of God as a lamp to their feet (Ps 119 v 105){"\n"}{"\n"}
  (3) Jesus and his disciples attended a wedding ceremony (John 2 v1 to 2)as a biblical{"\n"}{"\n"}
instances of socialization. Jesus participated in Passover feast with his disciples (mark
14 v 12 to 14) {"\n"} {"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   (1)To what extent should a Christian allow modernization?{"\n"}{"\n"}
   (2)Mention the association, gathering or group that a Christian must not be found in?{"\n"}{"\n"}
   (3)Mention biblical instances of socialization?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 15')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 17')} title='Next '></Button>
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
export default WEEK16