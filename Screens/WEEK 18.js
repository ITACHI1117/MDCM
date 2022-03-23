import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK18 = ({navigation}) => {
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
           BIBLE PASSAGE: GEN. 25:24-34 {"\n"}
           MEMORY VERSE: MAR. 3:25{"\n"}</Text>
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
        BROKEN HOMES{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1. Families are the bed rock of the societies. When families fall apart, society falls into
social and cultural decline. The plan of God for divinely instituted homes is for them to
remain united in body and in spirit. (Psa. 133 v 1).{"\n"}{"\n"}
  2. A broken home is a family in which the parents are separated or divorced. it is also a
family that is set apart due to tension and certain problems{"\n"}{"\n"}
  3. There are so many homes that are broken because of wrong choice in marriage (Pro
21 v 9 and 19, Pro 19 v 3). Parents or friends' influence ( Gen 2 v 24 , Pro 13 v 20 ),lack
of genuine sacrificial love (1 john 3 v 16 , rom 5 v 7 to 8) .Communication breakdown
(Matt. 5 v 37 ), sexual unfaithfulness between couples( Heb. 13 v 4 , Hosea 2 v 2),
stinginess or poor economic planning ( 1 timothy 6 v 10). Preference for a child over
other children (Gen. 25 v 28){"\n"}{"\n"}
  4. Effects of these are so enormous, children suffer emotional stress from being
abandoned. (Teachers should ask the students the other effects).{"\n"}{"\n"}
  5. Those who suffer the pain of broken homes can apply these solutions:{"\n"}{"\n"}
  a. Commit everything to God in prayer (sa.127 v 1, Psa. 50 v 15){"\n"}{"\n"}
  b. Embrace the fact that Jesus loves you.( Rom 5 v 8 ,matt 11 v 28 to 30 ).{"\n"}{"\n"}
  c. Learn to forgive (Eph. 3 v 32)   {"\n"}{"\n"}
        <Text style={{fontSize:25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1. Mention other effects of broken homes?{"\n"}{"\n"}
  2. What is a broken home?{"\n"}{"\n"}
  3. How can it be eliminated?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 17')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 19')} title='Next '></Button>
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
export default WEEK18