import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK31 = ({navigation}) => {
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
           BIBLE PASSAGE:  James 1:12-27{"\n"}
           MEMORY VERSE: 1 Cor 10:13{"\n"}</Text>
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
        TEMEPTATION{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}</Text>
        1: Temptation is one of the most familiar experiences of a true child of God and no one
can totally escape from it. Even our lord Jesus Christ was tempted (matt 4:1 Heb 4: 15).
This is why the lord taught us to include in our daily prayers and petition “And lead
us not into temptation but deliver us from all evil"{"\n"}{"\n"}
   2: These are sources of temptation: Satan (matt 4:1) Flesh (James 1:14) Evil association
( prov. 1:10) Friends (matt 6:22-23) our lust (1 Tim 6:9){"\n"}{"\n"}
   3: Some of the reasons for temptation
   -To test our faith (James 1:2-3)
   -To test our obedience
   - To test the depth of our love and sincerity of our testimonies, God is even faithful to
provide the way of escape (1 Cor. 10:13){"\n"}{"\n"}
   4: The avenues for temptation are as follow{"\n"}{"\n"}
   -Poverty or prosperity ( Prov. 30:9){"\n"}{"\n"}
   -Discouragement (Psalm 42:11, 1 king 19:4){"\n"}{"\n"}
   -Pride (the case of Nebuchadnezzar’s fall)( Daniel 4:30){"\n"}{"\n"}
   -Pleasure which led Demas astray (2 Tim 4:10){"\n"}{"\n"}
   -Material possession that ruined Achan (Joshua 18:21){"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
   1: What is temptation?{"\n"}{"\n"}
   2: Mention sources of temptation and how it can work{"\n"}{"\n"}
   3: Why does God tempt Believers?{"\n"}{"\n"}
   4: Discuss the avenue for temptation</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 30')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 32')} title='Next '></Button>
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
export default WEEK31