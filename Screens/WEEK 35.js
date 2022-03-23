import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';


const WEEK35 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 35  
           BIBLE PASSAGE: 2 Corin. 6:14-28 {"\n"}
           MEMORY VERSE: 2 Corin. 6:17{"\n"}</Text>
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
        STAND OUT{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: Another word for “Stand out” is being “Separated” In 1 John 2:15 we are told not to
love the world. Eph 5:1-2 admonishes to live as children of light. We must shine as light
in a world filled with darkness as imitator and representative of go God on earth.
  2: We must stand out as believers in Christ as follows:{"\n"}{"\n"}
  -stand out from all forms of sin- such as fornication,. Adultery, alcoholism smoking,
etc. Gal 5:19-21{"\n"}{"\n"}
  -Stand out from all works of darkness Eph 5:8, 11{"\n"}{"\n"}
  -stand out from heresies false doctrine and their perpetrators{"\n"}{"\n"}
  -Stand out from customs and traditions of men that contradict scriptures Col 2:8{"\n"}{"\n"}
  -Never marry an unbeliever 2 Cor. 6:12-17{"\n"}{"\n"}
  -Stand out from any relationship, association, business, partnership or friendship in
which Christ is not glorified or proclaimed.{"\n"}{"\n"}
  3: Why and how to stand out?{"\n"}{"\n"}
  -Be sober, vigilant and prayerful 1 Pet 5:8 Matt 26:41{"\n"}{"\n"}
  -abstain from all appearance of evil: evil communication and corrupt companies 1 Thes
5:22{"\n"}{"\n"}
  -Examine and renew your mind daily 2 Cor. 13:5{"\n"}{"\n"}
  -Study and meditate on the word of God to know his plan an purpose for your life 2Tim
2:15, Psalm 1:1-3, Josh 1:8{"\n"}{"\n"}
  -Put all your trust in God and not in miracle Prov. 3:5-6, Psalm 118:8{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: Identify reasons why some believers are still entangled in the crowd of the ungodly{"\n"}{"\n"}
  2: How can believers stand out from sin and ungodly eer/crowd?{"\n"}{"\n"}
  3 Is smoking as sin yes or no discuss</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 34')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 36')} title='Next '></Button>
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
export default WEEK35