import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK51 = ({navigation}) => {
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
           BIBLE PASSAGE: 1 Cor 1:18-24{"\n"}
           MEMORY VERSE: 1 Cor 1:24{"\n"}</Text>
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
        THE PREACHERS TOOL{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: We were mad to understand last Sunday that the preaching of the gospel is compulsory for all believers. It follows therefore, that if this assignment is to be carried out cheerfully and fearlessly and with divine approval, divine wisdom and compassion and the Holy Spirit. Power must be posed by any who would be the preacher of the gospel. May the Holy Spirit teach us as we study in Jesus name{"\n"}{"\n"}
        2: GODLY WISDOM: God gives perfect wisdom to those who ask him in faith. Jam 1:5-8. It is through God’s wisdom that the preacher can confound the wisdom of his/her audience (the world) 1 Cor. 1:27. Paul confounded with the wisdom of the Athenians through the wisdom of God. Act 17:15-34. The preacher needs God’s wisdom to expose carnality and to impact spiritual knowledge 1 Cor. 3:2-4.{"\n"}{"\n"}
        3: COMPASSION: compassion is, manifested throughout Christ early ministry. Matt 9:36, 23:37. Mark 1:41. The preacher must show compassion to rescue the soul of sinners from eer or destruction like (Pharaoh’s daughter) Exo. 2:6. through compassion the lord Jesus delivered believers to bless those who curse them and pray for those who despitefully use them Luke 6:27-28. Through compassion Christ died for sinners Rom 5:8{"\n"}{"\n"}
        4: POWER: Christ is full of powers in heaven and on earth Matt 28:18 Christ promised believers power through the Holy Ghost Act 1:8. Power enables the preacher to preach with boldness and sound mind. Act 4:31 2Tim 1:7. The power of the Holy Spirit enables the preacher to overcome Act 16:16-18.{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: Why is compassion compulsory for the preacher?{"\n"}{"\n"}
  2: Identify two roles of power, Devine wisdom and compassion in the preaching of the gospel?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 50')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 52')} title='Next '></Button>
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
export default WEEK51